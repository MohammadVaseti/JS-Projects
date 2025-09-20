const btn_run = document.querySelector(".btn-run");
let txt = document.querySelector("#txt");
let img = document.querySelector("img");
const func = document.querySelector(".func-btn");
btn_run.addEventListener("click", () => {
  img.setAttribute("src", txt.value);
  event.preventDefault();
});

func.addEventListener("click", () => {
  img.setAttribute("class", "border");
});
