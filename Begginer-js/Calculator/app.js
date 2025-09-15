"use strict";

// elements
const btns = document.querySelectorAll("button");
console.log(btns);
const display = document.querySelector(".display");
console.log(display);
const c_btn = document.querySelector(".c-btn");
const earase = document.querySelector(".earase");
console.log(earase);

const operators = document.querySelectorAll(".operator");
console.log(operators);

const equal = document.querySelector(".equal");
console.log(equal);

let num1 = null;

// ///////////////////////

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    let button = e.target.innerHTML;
    if (button === "=" || button === "C" || button === "⌫") {
      return;
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = button;
      } else {
        display.innerHTML += button;
      }
    }
  });
});

c_btn.addEventListener("click", (e) => {
  display.innerHTML = 0;
});

earase.addEventListener("click", (e) => {
  if (display.innerHTML.length == 1) {
    display.innerHTML = 0;
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
});

operators.forEach((e) => {
  e.addEventListener("click", () => {
    // console.log(e.innerHTML);
    num1 = +display.innerHTML.slice(0, -1);
    display.innerHTML = "0";
  });
});
