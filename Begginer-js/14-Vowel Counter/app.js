"use strict";
// elements
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
let word = document.querySelector(".word");
let counter = 0;

// / app logic
btn.addEventListener("click", (e) => {
  let text = input.value.toLowerCase();
  for (let i = 0; i <= text.length - 1; i++) {
    if (
      text[i] == "a" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "e" ||
      text[i] == "u"
    ) {
      word.innerHTML += ` ${text[i]}`;
      counter++;
      result.innerHTML = counter;
    }
  }
  input.value = "";
});
