"use strict";

// elements
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let res = document.querySelector(".result");

// game Choices
const choices = ["rock", "paper", "scissors"];
const randomNum1 = Math.floor(Math.random() * 3);
const randomNum2 = Math.floor(Math.random() * 3);
// random Choice
const player1 = choices[randomNum1];
const player2 = choices[randomNum2];
// console.log(`player1 is ${player1} player2 is ${player2}`);

// game Logic
if (player1 === player2) {
  p1.innerHTML = `Player1 is ${player1}`;
  p2.innerHTML = `Player2 is ${player2}`;
  res.innerHTML = "Game Was Draw";
}
// /////////////////
else if (player1 == "rock" && player2 == "scissors") {
  p1.innerHTML = "player1 is Rock";
  p2.innerHTML = "player2 is Scissors";
  res.innerHTML = "Player1 Was The Winner";
} else if (player1 == "rock" && player2 == "paper") {
  p1.innerHTML = "player1 is Rock";
  p2.innerHTML = "player2 is Paper";
  res.innerHTML = "Player2 Was The Winner";
}
// ////////////
else if (player1 == "paper" && player2 == "scissors") {
  p1.innerHTML = "player1 is Paper";
  p2.innerHTML = "player2 is Scissors";
  res.innerHTML = "Player2 Was The Winner";
} else if (player1 == "paper" && player2 == "rock") {
  p1.innerHTML = "player1 is Paper";
  p2.innerHTML = "player2 is Rock";
  res.innerHTML = "Player1 Was The Winner";
}
// //////////////////
else if (player1 == "scissors" && player2 == "paper") {
  p1.innerHTML = "player1 is Scissors";
  p2.innerHTML = "player2 is Paper";
  res.innerHTML = "Player1 Was The Winner";
} else if (player1 == "scissors" && player2 == "rock") {
  p1.innerHTML = "player1 is Scissors";
  p2.innerHTML = "player2 is Rock";
  res.innerHTML = "Player2 Was The Winner";
}
