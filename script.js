function getComputerChoice() {
  let random = Math.random();

  if (random > 0.66) {
    return "Scissors";
  } else if (random > 0.33) {
    return "Paper";
  }

  return "Rock";
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.toLowerCase().slice(1);
  computerSelection =
    computerSelection.slice(0, 1).toUpperCase() +
    computerSelection.toLowerCase().slice(1);
  let winner = "player";

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") {
        winner = "computer";
      } else if (computerSelection === "Rock") {
        winner = "draw";
      }
      break;
    case "Paper":
      if (computerSelection == "Scissors") {
        winner = "computer";
      } else if (computerSelection === "Paper") {
        winner = "draw";
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        winner = "computer";
      } else if (computerSelection === "Scissors") {
        winner = "draw";
      }
      break;
    default:
      winner = "computer";
  }

  return winner;
}

let buttons = document.querySelectorAll("button.item-button");
let restartBtn = document.querySelector(".reset-button")
let results = document.querySelector(".result-content");
let playerList = document.querySelector(".player-list");
let computerList = document.querySelector(".computer-list");
let gameResult = document.querySelector("#game-result");
let playerWins = 0;
let computerWins = 0;
let gameFinished = false;

for (btn of Array.from(buttons)) {
  btn.addEventListener("click", (e) => {
    if (gameFinished) return;
    let playerSelection = e.currentTarget.classList[0][0].toUpperCase() + e.currentTarget.classList[0].slice(1);
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    winner = winner[0].toUpperCase() + winner.slice(1);

    let playerChoice = document.createElement('li');
    let computerChoice = document.createElement('li');

    playerList.appendChild(playerChoice).textContent = playerSelection;
    computerList.appendChild(computerChoice).textContent = computerSelection;

    
    

    if (winner === "Player") {
      playerWins++;
    } else if (winner === "Computer") {
      computerWins++;
    }
    
    playerList.firstElementChild.textContent = "Player(" + playerWins + ")";
    computerList.firstElementChild.textContent = "Computer(" + computerWins + ")"; 

    if (playerWins === 5 || computerWins === 5) {
      gameFinished = true;
      gameResult.textContent = `The winner of the game is: ${
        playerWins > computerWins
          ? "You!"
          : computerWins > playerWins
          ? "The computer!"
          : "There is no winner!"
      }`;
    }
    //console.log("Player: " + playerSelection + "\nComputer: " + computerSelection);
  });
}


restartBtn.addEventListener('click', (e) => {
  playerWins = 0;
  computerWins = 0;
  gameFinished = false;
  gameResult.textContent = "";
  playerList.firstElementChild.textContent = "Player(" + playerWins + ")";
    computerList.firstElementChild.textContent = "Computer(" + computerWins + ")"; 
  while (playerList.childElementCount > 1) {
    playerList.removeChild(playerList.lastElementChild);
  }

  while (computerList.childElementCount > 1) {
    computerList.removeChild(computerList.lastElementChild);
  }
});
