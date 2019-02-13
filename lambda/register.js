const querystring = require('querystring');
const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed',
    };
  }

  // const params = querystring.parse(event.body);

  // console.log(`Hello, ${params.name}`);

  const params = JSON.parse(event.body);


  const createCharge = {
    amount: 3500,
    currency: 'usd',
    description: 'Gateway Gauntlet',
    source: params.stripeToken,
    receipt_email: params.email,
  };

  console.log(createCharge);

  const charge = await stripe.charges.create(createCharge);
  console.log(charge);

  return {
    statusCode: 200,
    body: 'Success!',
  };
};
