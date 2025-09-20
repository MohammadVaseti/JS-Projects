'use strict';

let btn = document.querySelector('.check');
// console.log(btn);
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let input = document.querySelector('.guess');
let message = document.querySelector('.message');
let scoretext = document.querySelector('.score');
let number = document.querySelector('.number');
let score = 20;
let highscore = 0;
let body = document.querySelector('body');
let high = document.querySelector('.highscore');
btn.addEventListener('click', function () {
  if (score > 0) {
    if (!input.value) {
      body.style.backgroundColor = 'orangered';

      message.textContent = 'no number';
    } else if (input.value > secretNum) {
      body.style.backgroundColor = 'red';

      message.textContent = 'too high';
      score--;
      scoretext.textContent = score;
    } else if (input.value < secretNum) {
      body.style.backgroundColor = 'red';

      message.textContent = 'too low';
      score--;
      scoretext.textContent = score;
    } else if (input.value == secretNum) {
      if (score > highscore) {
        highscore = score;
        high.textContent = highscore;
      }

      number.textContent = secretNum;
      message.textContent = "it's correct";
      body.style.backgroundColor = 'green';
    }
  } else {
    score = 0;
    scoretext.textContent = 0;
    message.textContent = ' lost';
  }
});

let again = document.querySelector('.again');
again.addEventListener('click', function () {
  number.textContent = '?';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);

  document.querySelector('.guess').value = '';

  body.style.backgroundColor = 'black';
  score = 20;
  scoretext.textContent = 20;
  message.textContent = 'Start guessing...';
  high.textContent = highscore;
});
