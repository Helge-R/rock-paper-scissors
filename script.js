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

    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.toLowerCase().slice(1);
    computerSelection = computerSelection.slice(0, 1).toUpperCase() + computerSelection.toLowerCase().slice(1);
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
        default: winner ="computer";
    }

    return winner;
}

function game () {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you choose? ", "");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if (winner === "player") {
            playerWins++;
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (winner === "computer") {
            computerWins++;
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
        } else {
            console.log("It's a Draw! Both players chose " + playerSelection);
        }
    }
    console.log(`\nThe winner of the game is: ${(playerWins > computerWins) ? "You!" : 
                                               (computerWins > playerWins) ? "The computer!" :
                                                "There is no winner!"}`)
}

game();