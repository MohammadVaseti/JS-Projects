"use strict";

// elements
const btns = document.querySelectorAll("button");
console.log(btns);
const display = document.querySelector(".display");
console.log(display);
let check = true;
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
