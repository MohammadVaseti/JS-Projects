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

// logic
// reset button
reset.addEventListener("click", (e) => {
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
});

// Start Function

start.addEventListener("click", (e) => {
  let timer = setInterval(() => {
    if (secNum == 59) {
      minNum++;
      min.innerHTML = String(minNum).padStart(2, "0");
      secNum = 0;
    }
    secNum++;
    sec.innerHTML = String(secNum).padStart(2, "0");
  }, 1000);
});
