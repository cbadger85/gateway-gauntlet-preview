const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const faunadb = require('faunadb');

const client = new faunadb.Client({ secret: process.env.FAUNADB_KEY });
const q = faunadb.query;

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed',
    };
  }

  const data = JSON.parse(event.body);

  const charge = {
    amount: 3500,
    currency: 'usd',
    description: 'Gateway Gauntlet',
    source: data.stripeToken,
    receipt_email: data.email,
  };

  const schema = {
    name: data.name,
    itsName: data.itsName,
    itsPin: data.itsPin,
    email: data.email,
    city: data.city,
    state: data.state,
    paid: true,
    attending: true,
  };

  try {
    await stripe.charges.create(charge);

    await client.query(
      q.Create(q.Class('attendees'), {
        data: schema,
      }),
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success!',
      }),
    };
  } catch (err) {
    if (err.type === 'StripeCardError') {
      return {
        statusCode: 402,
        body: JSON.stringify('Your card was declined'),
      };
    }
    return {
      statusCode: 402,
      body: JSON.stringify('Something went wrong, please try again later'),
    };
  }
};
