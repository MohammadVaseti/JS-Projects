"use strict";

// Elements
const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationsEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAll = document.querySelector(".clearAll");
const clearlast = document.querySelector(".clearLast");
const dotEl = document.querySelector(".dot");

const display1Num = "";
const display2Num = "";
const tempResultNum = null;

const lastOperation = "";
const haveDot = false;

numbersEl.forEach((n) => {
  n.addEventListener("click", (e) => {
    if (e.target.innerText == "." && haveDot == false) {
      haveDot = true;
    } else if (e.target.innerText == "." && haveDot == true) {
      return;
    }
    display2Num += e.target.innerText;
    display2El.innerText = display2Num;
  });
});

operationsEl.forEach((o) => {
  o.addEventListener("click", (e) => {
    if (!display2Num) {
      return;
    } else {
      haveDot = false;
    }
    const operationName = e.target.innerText;
    if (display1Num && display2Num && lastOperation) {
      mathOperation();
    } else {
      tempResultNum = parseFloat(display2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

function clearVar(name = "") {
  display1Num += display2Num + " " + name + " ";
  display1El.innerText = display1Num;
  display2El.innerText = "";
  display2Num = "";
  tempResultEl.innerHTML = tempResultNum;
}

function mathOperation() {
  if (lastOperation === "X") {
    tempResultNum = parseFloat(tempResultNum) * parseFloat(display2Num);
  } else if (lastOperation === "+") {
    tempResultNum = parseFloat(tempResultNum) + parseFloat(display2Num);
  } else if (lastOperation === "-") {
    tempResultNum = parseFloat(tempResultNum) - parseFloat(display2Num);
  } else if (lastOperation === "%") {
    tempResultNum = parseFloat(tempResultNum) % parseFloat(display2Num);
  } else if (lastOperation === "/") {
    tempResultNum = parseFloat(tempResultNum) / parseFloat(display2Num);
  }
}

equalEl.addEventListener("click", (e) => {
  if (!display1Num && !display2Num) {
    return;
  }
  haveDot = false;
  mathOperation();
  clearVar();
  display2Num = tempResultNum;
  display2El.innerHTML = tempResultNum;
  tempResultEl.innerText = "";
  display1Num = "";
});

clearAll.addEventListener("click", function () {
  display1El.innerText = "0";
  display2El.innerText = "0";
  tempResultEl.innerText = "0";
  display1Num = "";
  display2Num = "";
  tempResultNum = "";
});

clearlast.addEventListener("click", function () {
  display2El.innerText = "";
  display2Num = "";
});
