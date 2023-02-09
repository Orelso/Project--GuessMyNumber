'use strict';

// console.log( document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = "Your momma"
// document.querySelector('.score').textContent = " you suck"
// document.querySelector('.guess').value = 25 //1 use value for input fields

const secretNumber = Math.trunc(Math.random() * 20) + 1; //1 trunc removes the decimal. numbers between 1-20
document.querySelector('.number').textContent = secretNumber;
let score = 20;
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.check').addEventListener('click', function () {
  //1 Find the class of .check(button) and add a function to it. When clicked if there is no number in the input, then the if triggers.
  const guess = Number(document.querySelector('.guess').value);
  const gg = (document.querySelector('.message').textContent = '🪦 GAME OVER 🪦');

  // When there is no input
  if (!guess) {
    //1 if guess is false(empty)
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔️ No number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gg;
    }
    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it dude 👍';
    // When the number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'That number is too high 🔋';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gg;
    }
    // When the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'That number is too low 🪫';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gg;
    }
  }
});
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter' || event.key === 'Return') {
    document.querySelector('.check').click();
  }
});
