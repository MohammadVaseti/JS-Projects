"use strict";
// elements
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".weight_list");
const result = document.querySelector(".result");
const weightArr = [];
console.log(result);

btn.addEventListener("click", () => {
  let t = new Date();

  if (input.value == "") {
    alert("Please Fill The Input");
  }
  const para = document.createElement("p");
  para.innerText = input.value;
  list.appendChild(para);
  input.value = "";
  weightArr.push({ weight: input.value, time: t.getDate() });
  console.log(weightArr);
});
