"use strict";

// elements
const btns = document.querySelectorAll("button");
console.log(btns);
const display = document.querySelector(".display");
console.log(display);
const c_btn = document.querySelector(".c-btn");
// ///////////////////////

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    let button = e.target.innerHTML;
    if (button === "=" || button === "C" || button === "⌫") {
      return;
    } else {
      display.innerHTML += button;
    }
  });
});

c_btn.addEventListener("click", (e) => {
  display.innerHTML = 0;
});
