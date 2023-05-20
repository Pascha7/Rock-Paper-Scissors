const validOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const starterText = document.querySelectorAll(".starterText");

starterText.forEach((starterText) => {
  const text = starterText.textContent;
  starterText.textContent = "";
  [...text].forEach((char, i) => {
    setTimeout(() => {
      starterText.textContent += char;
    }, 90 * i);
  });
});

function getComputerChoice() {
  return validOptions[Math.floor(Math.random() * validOptions.length)];
}

function game() {
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
      } else if (computerSelection === "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
      } else if (computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
      } else if (computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
      }
    }
  }

  function handlePlayerSelection(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("roundResult").textContent = result;

    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  }

  // function endGame() {
  //   playerScore = 0;
  //   computerScore = 0;
  // }

  rockBtn.addEventListener("click", () => handlePlayerSelection("rock"));
  paperBtn.addEventListener("click", () => handlePlayerSelection("paper"));
  scissorsBtn.addEventListener("click", () =>
    handlePlayerSelection("scissors")
  );
}

game();
