import axios from 'axios';

const payment = (element, form) => {
  const stripe = Stripe(process.env.STRIPE_PUB_KEY);
  const elements = stripe.elements();
  const registerButton = document.getElementById('register-button');
  const errorElement = document.getElementById('error');
  const top = document.getElementById('top');

  const submittingPayment = (bool) => {
    const buttonHeight = registerButton.offsetHeight;
    const buttonWidth = registerButton.offsetWidth;
    registerButton.disabled = bool;
    registerButton.style.height = `${buttonHeight.toString()}px`;
    registerButton.style.width = `${buttonWidth.toString()}px`;

    if (bool) {
      registerButton.innerText = '';
    } else {
      registerButton.innerText = 'Register';
    }
  };

  const submitToken = async (token, formData) => {
    try {
      const registrationData = {
        name: formData.name.value,
        itsName: formData.itsName.value,
        itsPin: formData.itsPin.value,
        email: formData.email.value,
        city: formData.city.value,
        state: formData.state.value,
        zip: formData.zip.value,
        stripeToken: token.id,
      };

      await axios.post('/.netlify/functions/register', registrationData);

      document.querySelector('form').style.display = 'none';
      document.getElementById('success').style.display = 'block';
      top.scrollIntoView();
    } catch (err) {
      submittingPayment(false);

      if (err.response.status === 402) {
        errorElement.innerText = err.response.data;
      } else {
        errorElement.innerText = 'Something went wrong, please try again later';
      }
    }
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

    submittingPayment(true);

    const { name, state, zip } = e.target.elements;

    const { token, error } = await stripe.createToken(card, {
      name: name.value,
      address_state: state.value,
      address_zip: zip.value,
    });

    if (!error) {
      submitToken(token, e.target.elements);
    }
  });
};

export default payment;
