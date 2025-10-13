"use strict";

// elements
const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let hourNum = 0;
let minNum = 0;
let secNum = 0;
let timer = null;
console.log(timer);

// logic

const time = function () {
  timer = setInterval(() => {
    if (secNum == 59) {
      minNum++;
      min.innerHTML = String(minNum).padStart(2, "0");
      secNum = 0;
    } else if (minNum == 59) {
      hourNum++;
      hour.innerHTML = String(hourNum).padStart(2, "0");
      minNum = 0;
    }
    secNum++;
    sec.innerHTML = String(secNum).padStart(2, "0");
  }, 1000);
};
// Start Button
start.addEventListener("click", (e) => {
  if (timer === null) {
    time();
  } else {
    return;
  }
});
// reset Button
reset.addEventListener("click", (e) => {
  clearInterval(timer);
  secNum = 0;
  minNum = 0;
  hourNum = 0;
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hour.innerHTML = "00";
  timer = null;
});
// pause Button
pause.addEventListener("click", (e) => {
  clearInterval(timer);
  timer = null;
});
