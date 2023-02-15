"use strict";
// Please don't delete the 'use strict' line above

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection === 0) {
    return "rock";
  } else if (computerSelection === 1) {
    return "paper";
  } else if (computerSelection === 2) {
    return "scissors";
  }
}

const computerSelection = getComputerChoice();
//console.log(typeof playerSelection);
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let playerSelect = playerSelection.toLowerCase();

  if (playerSelect === "rock") {
    if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You Lose! Rock beats Paper";
    } else if (computerSelection === "rock") {
      return "Draw";
    }
  } else if (playerSelect === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "scissors") {
      return "Draw";
    }
  } else if (playerSelect === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "paper") {
      return "Draw";
    }
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Type "rock", "paper", or "scissors"');
    getComputerChoice;
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    if (roundResult.search("You Win!") > -1) {
      playerScore++;
    } else if (roundResult.search("You Lose!") > -1) {
      computerScore++;
    }
    console.log(playerScore, computerScore);
  }
  if (playerScore > computerScore) {
    console.log("Game over! You win!");
  } else if (playerScore < computerScore) {
    console.log("Game over! You lose!");
  } else if (playerScore === computerScore) {
    console.log("Draw!");
  }
}

game();
