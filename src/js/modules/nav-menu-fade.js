const navMenuFade = () => {
  const page = document.documentElement;
  const navbar = document.getElementById('navbar');
  const scrollPositionY = 40;

  if (page.scrollTop > scrollPositionY) {
    navbar.classList.add('navbar--scroll');
  }

  window.addEventListener('scroll', () => {
    if (page.scrollTop > scrollPositionY && !navbar.classList.contains('navbar--scroll')) {
      navbar.classList.add('navbar--scroll');
    } else if (page.scrollTop < scrollPositionY && navbar.classList.contains('navbar--scroll')) {
      navbar.classList.remove('navbar--scroll');
    }
  });
};

export default navMenuFade;
