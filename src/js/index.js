/** ********************
 *  Imports for webpack
 *********************** */

import '../css/style.css';
import navMenuToggle from './modules/nav-menu-toggle';
import navMenuFade from './modules/nav-menu-fade';
import smoothScroll from './modules/smooth-scroll';
import touchedAddClass from './modules/touched-add-class';
import payment from './modules/payment';

const cardElement = document.getElementById('register-card');
const registrationForm = document.getElementById('registration-form');

navMenuToggle();
navMenuFade();
smoothScroll();
if (registrationForm) {
  touchedAddClass(registrationForm, 'register-content--touched');
  payment(cardElement, registrationForm);
}
