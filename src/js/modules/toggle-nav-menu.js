const toggleNavMenu = () => {
  const menu = document.getElementById('menu');
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('menu-button');
  const line1 = document.getElementById('menu-button-line-1');
  const line2 = document.getElementById('menu-button-line-2');
  const line3 = document.getElementById('menu-button-line-3');

  const mobileMenu = getComputedStyle(navbarToggle).display !== 'none';

  if (mobileMenu) {
    menu.classList.toggle('nav__list--active');
    navbar.classList.toggle('navbar--active');
    line1.classList.toggle('menu-button__line-1--open');
    line2.classList.toggle('menu-button__line-2--open');
    line3.classList.toggle('menu-button__line-3--open');

    if (navbar.classList.contains('navbar--active')) {
      navbarToggle.setAttribute('aria-expanded', 'true');
    } else {
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  }
};

export default toggleNavMenu;
