"use strict";
// get elements
const sec = document.querySelector(".second");
const min = document.querySelector(".minute");
const hour = document.querySelector(".hour");

setInterval(() => {
  const time = new Date();
  sec.style.transform = `translate(-50% , -100%) rotate(${
    time.getSeconds() * 6
  }deg)`;

  min.style.transform = `translate(-50% , -100%) rotate(${
    time.getMinutes() * 6 + time.getSeconds() * 0.1
  }deg)`;

  hour.style.transform = `translate(-50% , -100%) rotate(${
    time.getHours() * 30 + time.getMinutes() * 0.5
  }deg)`;
}, 1000);
