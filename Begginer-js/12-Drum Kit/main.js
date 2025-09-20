"use strict";

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "a") {
    const song = new Audio("sounds/clap.wav");
    song.play();
  } else if (e.key === "s") {
    const song = new Audio("sounds/hihat.wav");
    song.play();
  } else if (e.key === "d") {
    const song = new Audio("sounds/kick.wav");
    song.play();
  } else if (e.key === "f") {
    const song = new Audio("sounds/openhat.wav");
    song.play();
  } else if (e.key === "g") {
    const song = new Audio("sounds/boom.wav");
    song.play();
  } else if (e.key === "h") {
    const song = new Audio("sounds/ride.wav");
    song.play();
  } else if (e.key === "j") {
    const song = new Audio("sounds/snare.wav");
    song.play();
  } else if (e.key === "k") {
    const song = new Audio("sounds/tom.wav");
    song.play();
  } else if (e.key === "l") {
    const song = new Audio("sounds/tink.wav");
    song.play();
  }
});
