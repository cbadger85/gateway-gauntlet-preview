/* eslint-disable no-undef */

// Enables scrollspy
$('body').scrollspy({ target: '#nav' });

// Provides focus for the Modal dialog
// TODO: change #myInput to the input that needs focus and #myModal to the proper id tag.
$('#myModal').on('shown.bs.modal', () => {
  $('#myInput').trigger('focus');
});


// Calculates days remaining until the event and displays it in an alert
const todaysDate = Date.now();
const gauntletDate = Date.parse('29 Jun 2019 15:00:00 GMT');
const msToGauntlet = gauntletDate - todaysDate;
const daysRemainingAlert = document.querySelector('#days-remaining');


msToDays = ms => ms / 1000 / 60 / 60 / 24;

const daysToGauntlet = Math.floor(msToDays(msToGauntlet));

daysRemainingAlert.innerHTML += `<p class="mb-0">There are only ${daysToGauntlet} days until the 2019 Gateway Gauntlet!</p>`;
