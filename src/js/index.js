/** ********************
 *  Imports for webpack
 *********************** */

import '../css/style.css';

/** ********************
 * Navigation Menu
 ********************** */

const openSideMenuButton = document.querySelector('#open-side-menu-button');
const closeSideMenuButton = document.querySelector('#close-side-menu-button');
const sideMenu = document.querySelector('#side-menu');
const main = document.querySelector('#main');

openSideMenuButton.addEventListener('click', (e) => {
  e.preventDefault();

  sideMenu.style.width = '250px';
  main.style.marginLeft = '250px';
});

closeSideMenuButton.addEventListener('click', (e) => {
  e.preventDefault();

  sideMenu.style.width = '0';
  main.style.marginLeft = '0';
});
