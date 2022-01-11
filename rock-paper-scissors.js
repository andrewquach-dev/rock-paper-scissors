let playerScore = 0;

let computerScore = 0;



function computerPlay() {

    let choice = Math.floor(Math.random() * 3);



    if (choice == 0) {

        return "Rock";

    } else if (choice == 1) {

        return "Paper";

    } else if (choice == 2) {

        return "Scissors";

    }

}



function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Scissors") {

        playerScore += 1;

    } else if (playerSelection == "Rock" && computerSelection == "Paper") {

        computerScore += 1;

    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {

        computerScore += 1;

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {

        playerScore += 1;

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {

        computerScore += 1;

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {

        playerScore += 1;

    } else if (playerSelection == computerSelection) {

        void(0);

    }



}



function game() {

    for (i = 0; i < 5; i++) {

        playRound(prompt(), computerPlay());

    }



    if (playerScore > computerScore) {

        return "Score: " + playerScore + " - " + computerScore + ". You win!";

    } else if (playerScore < computerScore) {

        return "Score: " + playerScore + " - " + computerScore + ". You lose!";

    } else if (playerScore == computerScore) {

        return "Score: " + playerScore + " - " + comptuerScore + ". It's a tie!";

    }

}



console.log(game());