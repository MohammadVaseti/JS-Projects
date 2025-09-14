"use strict";

// elements
const btns = document.querySelectorAll("button");
console.log(btns);
const display = document.querySelector(".display");
console.log(display);
// ///////////////////////

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    display.innerHTML += e.target.textContent;
  });
});
