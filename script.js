
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose rock, paper, or scissors:");

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanSelection = humanChoice.toLowerCase();

        if (humanSelection === computerChoice) {
            console.log("It's a draw!");
        } else if (
            (humanSelection === "rock" && computerChoice === "scissors") ||
            (humanSelection === "paper" && computerChoice === "rock") ||
            (humanSelection === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(
                `You win! ${humanSelection} beats ${computerChoice}`
            );
        } else {
            computerScore++;
            console.log(
                `You lose! ${computerChoice} beats ${humanSelection}`
            );
        }

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Game over!");

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("The game ended in a draw!");
    }

    console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
}

playGame();