let offBtn = document.querySelector(".off");
let onBtn = document.querySelector(".on");
let img = document.querySelector("img");
let p = document.querySelector("p");

offBtn.addEventListener("click", off);
function off() {
  img.src = "pic_bulboff.gif";
  p.innerHTML = "its off";
}

onBtn.addEventListener("click", on);
function on() {
  img.src = "pic_bulbon.gif";
  p.innerHTML = "its on";
}
