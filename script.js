// Get Random computer choice
function getComputerChoice() {
    
    // 0 = rock, 1 = paper, 2 = scissors
    const randomnumber = Math.floor(Math.random() * 3);
    if (randomnumber === 0) {
        return "rock";
    } else if (randomnumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get Human choice
function getHumanChoice() {

    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();

    // Check if choice is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice");
        return getHumanChoice();
    }

    return choice;

}


// Players scores
let humanScore = 0;
let computerScore = 0;

// Function to play a round
function playRound(humanChoice, computerChoice) {

    
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


console.log(getHumanChoice());