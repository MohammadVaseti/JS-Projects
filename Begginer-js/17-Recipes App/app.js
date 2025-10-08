"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const p = document.querySelector("p");

btn.addEventListener("click", (e) => {
  if (input.value == "") {
    alert("Fill The Input");
  } else {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));

    input.value = "";
  }
});
