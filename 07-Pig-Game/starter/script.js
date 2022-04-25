'use strict';

// Selectin elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// const scores = [0,0];
// let currentScore = 0;
// let activePlayer = 0
// let playing = true;

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    diceEl.classList.add('hidden');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}

init();

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');    
}


btnRoll.addEventListener('click',function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        console.log(diceEl)
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            // currentScore0El.textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
            }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
            diceEl.classList.add('hidden');
        }
        else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function () {
    init();
})

