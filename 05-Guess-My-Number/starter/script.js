'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function () {
    console.log('button clicked')
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a value';
    }
    else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'It\'s correct !';
        document.querySelector('.number').textContent = secretNumber;
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score; 
        }
        else {
            document.querySelector('.message').textContent = 'You loose !';
            document.querySelector('.score').textContent = 0; 
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score; 
        }
        else {
            document.querySelector('.message').textContent = 'You loose !';
            document.querySelector('.score').textContent = 0; 
        }
    }
})

document.querySelector('.again').addEventListener('click',function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})