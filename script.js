'use strict';

// console.log( document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = "Your momma"
// document.querySelector('.number').textContent = 50
// document.querySelector('.score').textContent = " you suck"
// document.querySelector('.guess').value = 25 //1 use value for input fields

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    // console.log(typeof guess);
    if(!guess) {
        console.log("There is no number");
        document.querySelector('.message').textContent = "⛔️ No number"
    }
})
