"use strict";

const sec = document.querySelector(".second");
const min = document.querySelector(".minute");
const hour = document.querySelector(".hour");

setInterval(() => {
  const time = new Date();
  sec.style.transform = `translate(-50% , -100%) rotate(${
    time.getSeconds() * 6
  }deg)`;
}, 1000);

setInterval(() => {
  const time = new Date();
  min.style.transform = `translate(-50% , -100%) rotate(${
    time.getMinutes() * 6 + time.getSeconds() * 0.1
  }deg)`;
}, 1000);
