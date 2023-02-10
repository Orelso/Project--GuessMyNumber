'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; //1 trunc removes the decimal. numbers between 1-20
let score = 20;
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.check').addEventListener('click', function () { //1 Find the class of .check(button) and add a function to it. When clicked if there is no number in the input, then the if triggers.
  const guess = Number(document.querySelector('.guess').value);
  const gg = (document.querySelector('.message').textContent =
    '🪦 GAME OVER 🪦');

  // When there is no input
  if (!guess) { //1 if guess is false(empty)
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔️ No number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gg;
      document.querySelector('.number').style.width = '70rem';
      document.querySelector('.number').textContent = 'GAME OVER! You Loose 🥲';
    }
    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it dude 👍';
    document.querySelector('body').style.backgroundColor = 'green'; //1 When the player wins the game, the background color changes
    // document.querySelector('.number').style.width = '70rem';
    document.querySelector('.number').textContent = 'GAME OVER! You win🏆';
    document.querySelector('.number').textContent = secretNumber;

    // When the number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'That number is too high 🔋';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gg;
      document.querySelector('.number').style.width = '70rem';
      document.querySelector('.number').textContent = 'GAME OVER! You Loose 🥲';
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
      document.querySelector('.number').style.width = '70rem';
      document.querySelector('.number').textContent = 'GAME OVER! You Loose 🥲';
    }
  }
});

function resetGame() {
    score = 20;
    // secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '';

  }
  
  document.querySelector('.again').addEventListener('click', function () { 
    resetGame();
  });
  

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter' || event.key === 'Return') {
    document.querySelector('.check').click();
  }
});


