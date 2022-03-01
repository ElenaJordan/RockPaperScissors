let arrayGame = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const cpuResults = ["Rock", "Paper", "Scissors"];
    var rpsNumber = Math.floor(Math.random() * 10);
    rpsNumber = rpsNumber % 3;
    return cpuResults[rpsNumber];
    
}

function playRound() {
    let playerChoice = prompt("please select either Rock, Paper or Scissors");
    let computerChoice = computerPlay();
    let result;
    console.log("You selected: " + playerChoice + ".");
    console.log("The computer selected: " + computerChoice + ".");
    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            result = "It's a tie!. Nobody wins.";
        } else if (computerChoice === "Paper") {
            computerScore++;
            result = "Paper beats Rock! Computer wins.";
        } else {
            playerScore++;
            result = "Rock beats Scissors! You win";
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            playerScore++;
            result = "Paper beats Rock! You win.";
        } else if (computerChoice === "Paper") {
            result = "It's a tie!. Nobody wins.";
        } else {
            computerScore++;
            result = "Scissors beats Paper! Computer wins";
        }
    } else {
        if (computerChoice === "Rock") {
            computerScore++;
            result = "Rock beats Scissors! Computer Wins.";
        } else if (computerChoice === "Paper") {
            playerScore++;
            result = "Scissors beats Paper! You win";
        } else {
            result = "It's a tie!. Nobody wins.";
        }
    }
    console.log(result);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("The score is currently " + playerScore + " for the player and " + computerScore + " for the computer.")
    }
    if (playerScore > computerScore) {
        console.log("Congrats, you've won this game.");
    } else if (computerScore > playerScore) {
        console.log("Sorry, the computer won this game.")
    } else {
        console.log("Tie game, Nobody wins.")
    }
}