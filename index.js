let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const display = document.querySelector("#display")

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

function updatePts(){
    document.querySelector("#count").textContent = `Player: ${humanScore}   Computer: ${computerScore}` 
}

function whoWon() {
    champion = humanScore > computerScore ? "Player" : "Computer"
    console.log("The Champion is " + champion)
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        display.textContent = "Tie!"
        humanScore += 1;
        computerScore += 1;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        display.textContent = "Computer Wins!"
        computerScore += 1;
    } else {
        display.textContent = "Human Wins!"
        humanScore += 1;
    }
    
    updatePts()
}


rock.addEventListener("click", () => {
    playRound(rock.id, getComputerChoice())
    count++
})

paper.addEventListener("click", () => {
    playRound(paper.id, getComputerChoice())
    count++
})

scissors.addEventListener("click", () => {
    playRound(scissors.id, getComputerChoice())
    count++
})

