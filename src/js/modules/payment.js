const payment = (element, form) => {
  const stripe = Stripe(process.env.STRIPE_PUB_KEY);
  const elements = stripe.elements();

  const submitToken = (token) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);

    console.log('form submitted!');
    // TODO: submit form to serverless function
    // form.submit();

    // TODO: toggle modal with either success and redirect or error message.
  };

  const stripeOptions = {
    style: {
      base: {
        fontSize: '16px',
      },
    },
    classes: {
      base: 'register-card',
      focus: 'register-card--focus',
      invalid: 'register-card--invalid',
    },
    hidePostalCode: true,
  };

  const card = elements.create('card', stripeOptions);
  card.mount(element);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { name, state, zip } = e.target.elements;

    // console.log(state.value, zip.value);

    const { token, error } = await stripe.createToken(card, {
      name: name.value,
      address_state: state.value,
      address_zip: zip.value,
    });

    if (error) {
      // TODO: trigger modal with error
    } else {
      submitToken(token);
    }
  });
};

export default payment;
