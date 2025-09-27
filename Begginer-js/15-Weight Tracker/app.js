"use strict";
// elements
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".weight_list");
const result = document.querySelector(".result");
console.log(result);

const savedWeights = JSON.parse(localStorage.getItem("weight")) || [];
const weightArr = savedWeights;

//
savedWeights.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = `Weight: ${item.weight} - Time: ${new Date(
    item.time
  ).toLocaleString()}`;
  result.appendChild(li);
});

btn.addEventListener("click", () => {
  let now = new Date();

  if (input.value == "") {
    alert("Please Fill The Input");
  }
  const para = document.createElement("p");
  para.innerText = input.value;
  list.appendChild(para);
  let obj = { weight: input.value, time: now.getTime() };
  weightArr.push(obj);
  localStorage.setItem("weight", JSON.stringify(weightArr));

  const li = document.createElement("li");
  li.innerText = `Weight: ${input.value} - Time: ${now.toLocaleString()}`;
  result.appendChild(li);
});
