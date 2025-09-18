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
let num2 = null;
let operator = null;
let result = null;
// clean display button
c_btn.addEventListener("click", (e) => {
  display.innerHTML = 0;
  num1 = 0;
  num2 = 0;
  result = 0;
});
//////////////////

// earaser button
earase.addEventListener("click", (e) => {
  if (display.innerHTML.length == 1) {
    display.innerHTML = 0;
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
});
/////////////////////////

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    let button = e.target.innerHTML;
    if (
      (display.innerHTML === "0" &&
        display.innerHTML.length == 1 &&
        button == "×") ||
      button == "÷" ||
      button == "⌫" ||
      button == "C" ||
      button == "="
    ) {
      return;
    } else {
      display.innerHTML += button;
    }
  });
});

// operators.forEach((e) => {
//   e.addEventListener("click", (op) => {
//     operator = op.target.innerHTML;

//     if (operator == "×" || operator == "÷") {
//       display.innerHTML += operator;
//     }
//     num1 = +display.innerHTML.slice(0, -1);
//     console.log(num1);
//   });
// });
