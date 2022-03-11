const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
let arrayGame = ["Rock", "Paper", "Scissors"];
let playerScore = document.getElementById("#playerScoreNum");
let computerScore = document.getElementById("#cpuScoreNum");
let playerCounter = 0;
let cpuCounter = 0;
let playerChoice;
let computerChoice;
let playerScoreNum = document.querySelector("#playerScoreNum");
let cpuScoreNum = document.querySelector("#cpuScoreNum");

rockButton.addEventListener('click', () => {
    document.getElementById("userSelectionIcon").src = "Images/Rock.png";
    playRound("Rock");
});

paperButton.addEventListener('click', () => {
    document.getElementById("userSelectionIcon").src = "Images/Paper.png";
    playRound("Paper");
});

scissorsButton.addEventListener('click', () => {
    document.getElementById("userSelectionIcon").src = "Images/Scissors.png";
    playRound("Scissors");
});

function computerPlay() {
    const cpuResults = ["Rock", "Paper", "Scissors"];
    var rpsNumber = Math.floor(Math.random() * 10);
    rpsNumber = rpsNumber % 3;
    return cpuResults[rpsNumber];
}

function playRound(playerChoice) {
    let computerChoice = computerPlay();
    let result;
    console.log("The computer selected: " + computerChoice + ".");
    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            document.getElementById("cpuSelectionIcon").src = "Images/Rock.png";
            result = "It's a tie!. Nobody wins.";
        } else if (computerChoice === "Paper") {
            computerScore++;
            document.getElementById("cpuSelectionIcon").src = "Images/Paper.png";
            result = "Paper beats Rock! Computer wins.";
            cpuCounter++;
            cpuScoreNum.textContent = cpuCounter;
        } else {
            playerScore++;
            document.getElementById("cpuSelectionIcon").src = "Images/Scissors.png";
            result = "Rock beats Scissors! You win";
            playerCounter++;
            playerScoreNum.textContent = playerCounter;
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            playerScore++;
            document.getElementById("cpuSelectionIcon").src = "Images/Rock.png";
            result = "Paper beats Rock! You win.";
            playerCounter++;
            playerScoreNum.textContent = playerCounter;
        } else if (computerChoice === "Paper") {
            document.getElementById("cpuSelectionIcon").src = "Images/Paper.png";
            result = "It's a tie!. Nobody wins.";
        } else {
            computerScore++;
            document.getElementById("cpuSelectionIcon").src = "Images/Scissors.png";
            result = "Scissors beats Paper! Computer wins";
            cpuCounter++;
            cpuScoreNum.textContent = cpuCounter;
        }
    } else {
        if (computerChoice === "Rock") {
            computerScore++;
            document.getElementById("cpuSelectionIcon").src = "Images/Rock.png";
            result = "Rock beats Scissors! Computer Wins.";
            cpuCounter++;
            cpuScoreNum.textContent = cpuCounter;
        } else if (computerChoice === "Paper") {
            playerScore++;
            document.getElementById("cpuSelectionIcon").src = "Images/Paper.png";
            result = "Scissors beats Paper! You win";
            playerCounter++;
            playerScoreNum.textContent = playerCounter;
        } else {
            document.getElementById("cpuSelectionIcon").src = "Images/Scissors.png";
            result = "It's a tie!. Nobody wins.";
        }
    }
    console.log(result);
}

/*function playGame() {
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
} */