"use strict";
// elements
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".weight_list");
const result = document.querySelector(".result");
console.log(result);

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please Fill The Input");
  }
  const para = document.createElement("p");
  para.innerText = input.value;
  list.appendChild(para);
  input.value = "";
});
