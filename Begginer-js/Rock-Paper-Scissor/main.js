"use strict";
const choices = ["rock", "paper", "scissors"];
const randomNum1 = Math.floor(Math.random() * 3);
const randomNum2 = Math.floor(Math.random() * 3);

const player1 = choices[randomNum1];
const player2 = choices[randomNum2];

console.log(player1, player2);

let p1Score = 0;
let p2Score = 0;

if (player1 === player2) {
  console.log("draw");
}
// /////////////////
else if (player1 == "rock" && player2 == "scissors") {
  ++p1Score;
  console.log("p1 is rock p2 is scissors => p1 win", p1Score);
} else if (player1 == "rock" && player2 == "paper") {
  ++p2Score;
  console.log("p1 is rock p2 is paper => p2 win", p2Score);
}

// ////////////
else if (player1 == "paper" && player2 == "scissors") {
  ++p2Score;
  console.log("p1 is paper p2 is scissors => p2 win", p2Score);
} else if (player1 == "paper" && player2 == "rock") {
  ++p1Score;
  console.log("p1 is paper p2 is rock => p1 win", p1Score);
}
// //////////////////
else if (player1 == "scissors" && player2 == "paper") {
  ++p1Score;
  console.log("p1 is scissors p2 is paper => p1 win", p1Score);
} else if (player1 == "scissors" && player2 == "rock") {
  ++p2Score;
  console.log("p1 is scissors p2 is rock => p2 win", p2Score);
}
