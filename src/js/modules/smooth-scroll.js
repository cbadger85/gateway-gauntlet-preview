import toggleNavMenu from './toggle-nav-menu';

const smoothScroll = () => {
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

  smoothScrollLinks.forEach((smoothScrollLink) => {
  // console.log(smoothScrollLink.dataset.smoothScrollTarget);
    smoothScrollLink.addEventListener('click', (e) => {
      try {
        e.preventDefault();
        const { smoothScrollTarget } = smoothScrollLink.dataset;
        const smoothScrollTargetId = document.getElementById(smoothScrollTarget);
        smoothScrollTargetId.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center',
        });
        toggleNavMenu();
      } catch (err) {
        console.log('scollIntoView() not supported on this browser');
      }
    });
  });
};

export default smoothScroll;
