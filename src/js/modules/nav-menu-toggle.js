import toggleNavMenu from './toggle-nav-menu';

const navMenuToggle = () => {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('menu-button');

  navbarToggle.addEventListener('click', (e) => {
    e.preventDefault();

    toggleNavMenu();
  });

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      if (navbar.classList.contains('navbar--active')) {
        toggleNavMenu();
      }
    }
  });
};

export default navMenuToggle;
