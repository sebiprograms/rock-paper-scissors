
function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1))+1;
}

function getHumanChoice() {
    return parseInt(prompt("Input 1: Rock,  2: Paper, 3:  Scissors", "Input number"));
}

let humanScore = 0;
let computerScore = 0;
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {

}
