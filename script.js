function getComputerChoice() {
    let random = Math.random();

    if (random > 0.66) {
        return "Scissors";
    } else if (random > 0.33) {
        return "Paper";
    } 

    return "Rock";
}

console.log(getComputerChoice());