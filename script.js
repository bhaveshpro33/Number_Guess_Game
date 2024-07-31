let randnum = Math.round(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const input = document.querySelector('.guessField');
const guessslot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startbt = document.querySelector('.resultParas');
const p = document.createElement('p');
let preGuess = [];
let playgame = true;
let numGuess = 1;

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    vadidateGuess(guess);
    console.log(guess);
  });
}

function vadidateGuess(guess) {
  if (isNaN(guess)) {
    alert('Entered number is not valid');
  } else if (guess < 0) {
    alert('Enter number greater than 0');
  } else if (guess > 100) {
    alert('Enter number less than 100');
  } else {
    preGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMsg(`Gameover.Random number was ${randnum}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (randnum == guess) {
    alert('You Won');
    endgame();
  } else if (guess < randnum) {
    displayMsg('number is too low');
  } else {
    displayMsg('number is too high');
  }
}

function displayGuess(guess) {
  input.value = '';
  guessslot.innerHTML += `${guess},`;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}
function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function newGame() {
  const newgamebutton = document.querySelector('#newGame');
  newgamebutton.addEventListener('click', () => {
    randnum = Math.round(Math.random() * 100 + 1);
    guessslot.innerHTML = '';
    numGuess = 1;
    lastResult.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startbt.removeChild(p);
    playgame = true;
  });
}
function endgame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id ="newGame">Start new game</h2>';
  startbt.appendChild(p);
  playgame = false;
  newGame();
}
