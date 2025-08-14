"use strict";

/////////////////////////////////////////////////////////////////////

"use strict";
// elements
const choices = ["rock", "paper", "scissors"];

const yours = document.querySelector(".yourscore");
const cms = document.querySelector(".cmscore");
console.log(cms, yours);
const btn = document.querySelector("button");
const input = document.querySelector(".input");

// بازیابی امتیاز ذخیره‌شده یا صفر اگر وجود نداشت
let cmScore = Number(localStorage.getItem("cmScore")) || 0;
let yourScore = Number(localStorage.getItem("yourScore")) || 0;

btn.addEventListener("click", function () {
  const randNum = Math.floor(Math.random() * 3);
  let cmChoice = choices[randNum];
  console.log(cmChoice);

  if (input.value === cmChoice) {
    console.log("draw");
  }
  // ////////////
  else if (cmChoice === "rock" && input.value === "scissors") {
    ++cmScore;
    console.log("cm win", cmScore);
  } else if (cmChoice === "rock" && input.value === "paper") {
    ++yourScore;
    console.log("you win", yourScore);
  }
  // /////////////
  else if (cmChoice === "scissors" && input.value === "rock") {
    ++yourScore;
    console.log("you win", yourScore);
  } else if (cmChoice === "scissors" && input.value === "paper") {
    ++cmScore;
    console.log("cm win", cmScore);
  }
  // ///////////////////
  else if (cmChoice === "paper" && input.value === "rock") {
    ++cmScore;
    console.log("cm win", cmScore);
  } else if (cmChoice === "paper" && input.value === "scissors") {
    ++yourScore;
    console.log("you win", yourScore);
  }

  // ذخیره امتیازها در localStorage
  localStorage.setItem("cmScore", cmScore);
  localStorage.setItem("yourScore", yourScore);

  cms.innerHTML = `compter = ${cmScore}`;
  yours.innerHTML = `you = ${yourScore}`;
});
// window.addEventListener("load", function () {
//   cmScore = 0;
//   yourScore = 0;
//   localStorage.setItem("cmScore", cmScore);
//   localStorage.setItem("yourScore", yourScore);
// });
