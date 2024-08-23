
function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1))+1;
}

function getHumanChoice() {
    return parseInt(prompt("Input 1: Rock,  2: Paper, 3:  Scissors", "Input number"));
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        console.log("Tie!")
    } else if ((humanChoice == 1 && computerChoice == 2) || (humanChoice == 2 && computerChoice == 3) || (humanChoice == 3 && computerChoice == 1)) {
        console.log("Computer Wins!")
        computerScore += 1;
    } else {
        console.log("Human Wins!");
        humanScore += 1;
    }
}


// Main Game loop
function playGame {
    let gameOn = true;
    

    while(gameOn == true) {

        for (let i = 0; i <= 5; i++) {
            const humanChoice = getHumanChoice()
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
        //ends game after 5 rounds
        console.log("The Champion")
        gameOn = false;
    }


}




