let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

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



function whoWon() {
    champion = humanScore > computerScore ? "Player" : "Computer";
    console.log("The Champion is " + champion);
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
    whoWon()
};

rock.addEventListener("onClick", playRound(rock.id, getComputerChoice()))
paper.addEventListener("onClick", playRound(paper.id, getComputerChoice()))
scissors.addEventListener("onClick", playRound(scissors.id, getComputerChoice()))