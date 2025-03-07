let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Returns a number either 0 1 2
    choice = Math.floor(Math.random() * 3);
    
    if (choice == 0){
        return "rock";
    } else if (choice == 1){
        return "paper"
    } else if (choice == 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("rock,  paper, scissors", "Input choice");
    if (( choice != "rock" ) || ( choice != "paper" ) || ( choice != "scissors" )) {
        console.error("Invalid input retry")
        getHumanChoice()
    }
}



function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        console.log("Tie!")
        humanScore += 1;
        computerScore += 1;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissorrs" && computerChoice == "rock")) {
        console.log("Computer Wins!")
        computerScore += 1;
    } else {
        console.log("Human Wins!");
        humanScore += 1;
    }
}


// Game loop
function playGame() {
    let gameOn = true;

    while(gameOn) {

        // Best out of 3 rounds wins
        for (let i = 0; i < 3; i++) {
            playRound(getHumanChoice(), getComputerChoice())
        }

        // decides winner
        champion = humanScore > computerScore ? "Player" : "Computer";
        console.log("The Champion is " + champion);
        gameOn = false;
    }

}

playGame();




