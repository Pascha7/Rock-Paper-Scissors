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
    return playerChoice;
  }
}
