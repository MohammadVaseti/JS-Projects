let p = document.querySelector("p");

let blackFont = document.querySelector(".color1");
let redFont = document.querySelector(".color2");
let blueFont = document.querySelector(".color3");
let greenFont = document.querySelector(".color4");

let range = document.querySelector(".range");
let size_label = document.querySelector(".size-label");

let italic = document.querySelector(".italicBtn");
let light = document.querySelector(".lightBtn");
let bold = document.querySelector(".boldBtn");

let select = document.querySelector(".select");

select.addEventListener("change", function () {
  if (select.value == 1) {
    p.style.fontFamily = "sans-serif";
  } else if (select.value == 2) {
    p.style.fontFamily = "tahoma";
  } else if (select.value == 3) {
    p.style.fontFamily = "georgia";
  }
});

range.addEventListener("input", function () {
  p.style.fontSize = `${range.value}px`;
  size_label.innerHTML = `fontsize : ${range.value} px`;
});

italic.addEventListener("click", function () {
  p.style.fontStyle = "italic";
});

bold.addEventListener("click", function () {
  p.style.fontWeight = "bold";
});

light.addEventListener("click", function () {
  p.style.fontWeight = "lighter";
});

blackFont.addEventListener("click", function () {
  p.style.color = "black";
});

redFont.addEventListener("click", function () {
  p.style.color = "red";
});

blueFont.addEventListener("click", function () {
  p.style.color = "blue";
});

greenFont.addEventListener("click", function () {
  p.style.color = "green";
});
