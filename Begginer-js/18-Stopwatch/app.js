"use strict";

// elements
const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

const hourNum = 0;
const minNum = 0;
const secNum = 0;

// logic

// reset button
reset.addEventListener("click", (e) => {
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
});

// start button
start.addEventListener;
