"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const p = document.querySelector("p");

btn.addEventListener("click", (e) => {
  console.log(input.value);
  p.innerHTML += input.value;
  input.value = "";
});
