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

    // Logic to determine winner
    if (humanChoice === computerChoice) {
        return "It's a tie!" + humanScore + "and" + computerScore + "is the same.";
    } else if (humanChoice === "rock && computerChoice === scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Paper beats scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


console.log(getHumanChoice());