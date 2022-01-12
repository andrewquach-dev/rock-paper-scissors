let playerScore = 0;

let computerScore = 0;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        console.log("You Win! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection == computerSelection) {
        console.log("Tie");
    }
    document.getElementById("score").innerHTML = playerScore + " - " + computerScore;
    console.log("Score: " + playerScore + " - " + computerScore + ".");
    if (playerScore == 5 || computerScore == 5) {
        console.log("WE GOT A WINNER!!!1");
        scoreCheck();
    }
}

function game() {
    const rock_btn = document.querySelector('#rock-btn');
    const paper_btn = document.querySelector('#paper-btn');
    const scissors_btn = document.querySelector('#scissors-btn');


    rock_btn.addEventListener('click', () => {
        playRound("rock", computerPlay());
    });

    paper_btn.addEventListener('click', () => {
        playRound("paper", computerPlay());
    });

    scissors_btn.addEventListener('click', () => {
        playRound("scissors", computerPlay());
    });

}

function scoreCheck() {
    const container = document.querySelector('#container');
    const outcome = document.createElement('h2');
    let result = playerScore == 5 ? "lost!" : "won!";
    outcome.textContent = "You " + result;
    container.appendChild(outcome);
}
game();