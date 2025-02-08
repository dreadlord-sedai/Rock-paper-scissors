// Get Random computer choice
function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3);
    if (randomnumber === 0) {
        return "rock";
    } else if (randomnumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! " + humanChoice + " and " + computerChoice + " is the same.";
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else {
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
}

// Function to handle human choice
function handleHumanChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result.includes("win")) {
        humanScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    document.getElementById("humanScore").innerHTML = humanScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (humanScore >= 5 || computerScore >= 5) {
        determineWinner();
    }
}

// Function to determine the overall winner
function determineWinner() {
    if (humanScore > computerScore) {
        document.getElementById("result").innerHTML = "You win! You beat the computer " + humanScore + " to " + computerScore + ".";
    } else if (humanScore < computerScore) {
        document.getElementById("result").innerHTML = "You lose! The computer beat you " + computerScore + " to " + humanScore + ".";
    } else {
        document.getElementById("result").innerHTML = "It's a tie! You both scored " + humanScore + " points.";
    }

    // Disable buttons after game ends
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Play until one player reaches 5 points
function playGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    document.getElementById("humanScore").innerHTML = humanScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("result").innerHTML = "";

    document.getElementById("rock").addEventListener("click", function() {
        roundsPlayed++;
        handleHumanChoice("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        roundsPlayed++;
        handleHumanChoice("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
        roundsPlayed++;
        handleHumanChoice("scissors");
    });
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

playGame();