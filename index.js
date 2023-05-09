// array with all valid options
let validOptions = ["rock", "paper", "scissors"];

// The function for the computer selection
function getComputerChoice() {
  // computers choice
  let index = Math.floor(Math.random() * validOptions.length);
  let choice = validOptions[index];
  return choice;
}

// Function for the player selection
function playerSelection() {
  // declaring playerChoice variable
  let playerChoice;
  while (!validOptions.includes(playerChoice)) {
    // initializing playerChoice with user input
    playerChoice = prompt("Rock, Paper or Scissors?: ").toLowerCase();
  }
  return playerChoice;
}

// Function for playing 1 round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissor";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissor beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissor";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissor beats Paper";
  }
}

// Function for starting the game
function game() {
  let plChoice = playerSelection();
  let CpChoice = getComputerChoice();
  let result = playRound(plChoice, CpChoice);
  console.log(result);
}
