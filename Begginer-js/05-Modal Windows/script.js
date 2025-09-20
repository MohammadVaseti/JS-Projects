'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpen = document.querySelectorAll('.show-modal');
const btnclose = document.querySelector('.close-modal');

const openFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', openFunc);
}
btnclose.addEventListener('click', closeFunc);
overlay.addEventListener('click', closeFunc);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeFunc();
  }
});
