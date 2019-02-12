const config = require('../config');
const stripe = require('stripe')(config.stripe.secretKey);

exports.register = async (req, res, next) => {
  // console.log(req.body);

  const createCharge = {
    amount: 3500,
    currency: 'usd',
    description: 'Gateway Gauntlet',
    source: req.body.stripeToken,
    receipt_email: req.body.email,
  };

  console.log(process.env.STRIPE_SECRET_KEY);

  const charge = await stripe.charges.create(createCharge);
  console.log(charge);

  res.json({
    message: 'success!',
  });
};
