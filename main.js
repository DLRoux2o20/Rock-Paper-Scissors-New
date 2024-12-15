function defineA() {
    return Math.floor((Math.random() * 3));
}

let a = defineA();
let computerScore = 0;
let playerScore = 0;
let playerScreenScore = document.getElementById("pScoreCounter");
let computerScreenScore = document.getElementById("cScoreCounter");
let roundResults = document.getElementById("roundResults");

let btnRock = document.getElementById("btn1");
let btnPaper = document.getElementById("btn2");
let btnScissors = document.getElementById("btn3");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");

function getComputerChoice() {

    if (a === 0) {
        choice2.textContent = "Rock";
        return "Rock";
    } else if (a === 1) {
        choice2.textContent = "Paper";
        return "Paper";
    }
    choice2.textContent = "Scissors";
    return "Scissors"; 
}

let computerChoice = "";
let playerSelection = "";

    
        function playRound() {
        
    computerChoice = getComputerChoice();

        if (playerSelection === "Rock") {
            var b = 0;
        } else if (playerSelection === "Paper") {
            var b = 1;
        } else if (playerSelection === "Scissors") {
            var b = 2;
        }

        if (a === 0 && b === 2) {
            roundResults.textContent = "You lose! Rock beats Scissors";
            computerScore += 1;
            computerScreenScore.textContent = `${computerScore}`;
            a = defineA();
        } else if (a === 2 && b === 0) {
            roundResults.textContent = "You won! Rock beats Scissors";
            playerScore += 1;
            playerScreenScore.textContent = `${playerScore}`;
            a = defineA();
        } else if (a > b) {
            roundResults.textContent = `You lost! ${computerChoice} beats ${playerSelection}`;
            computerScore += 1;
            computerScreenScore.textContent = `${computerScore}`;
            a = defineA();
        } else if (a < b) {
            roundResults.textContent = `You won! ${playerSelection} beats ${computerChoice}`;
            playerScore += 1;
            playerScreenScore.textContent = `${playerScore}`;
            a = defineA();
        } else if (a === b) {
            roundResults.textContent = "It was a tie";
            a = defineA();
        }

    if (playerScore === 5) {
        let endScreen = document.createElement("div");
        document.body.appendChild(endScreen);
        endScreen.style.cssText = "position: absolute; top: 0; width: 100vw; height: 100vh;";
        endScreen.style.backgroundColor = "black";
        endScreen.style.zIndex = "1";

        let gameResults = document.createElement("span");
        document.body.appendChild(gameResults);
        gameResults.style.cssText = "color: white; position: absolute; top: 25vh; right: 30vw;";
        gameResults.style.fontSize = "80px";
        gameResults.style.zIndex = "1";
        gameResults.textContent = "Congratulations! You won!";

        let playAgain = document.createElement("span");
        document.body.appendChild(playAgain);
        playAgain.textContent = "Play Again";
        playAgain.style.cssText = "color: white; position: absolute; bottom: 30vh; right: 45vw;";
        playAgain.style.fontSize = "50px";
        playAgain.style.zIndex = "1";

        playAgain.addEventListener("click", function() {
            endScreen.remove();
            gameResults.remove();
            playerScore = 0;
            computerScore = 0;
            playerScreenScore.textContent = "0";
            computerScreenScore.textContent = "0";
            roundResults.textContent = "";
            choice1.textContent = "";
            choice2.textContent = "";
            playAgain.remove();
        });
    } else if (computerScore === 5) {
        let endScreen = document.createElement("div");
        document.body.appendChild(endScreen);
        endScreen.style.cssText = "position: absolute; top: 0; width: 100vw; height: 100vh;";
        endScreen.style.backgroundColor = "black";
        endScreen.style.zIndex = "1";
        
        let gameResults = document.createElement("span");
        document.body.appendChild(gameResults);
        gameResults.style.cssText = "color: white; position: absolute; top: 25vh; right: 26vw;";
        gameResults.style.fontSize = "80px";
        gameResults.style.zIndex = "1";
        gameResults.textContent = "You lost! Better luck next time!";

        let playAgain = document.createElement("span");
        document.body.appendChild(playAgain);
        playAgain.textContent = "Play Again";
        playAgain.style.cssText = "color: white; position: absolute; bottom: 30vh; right: 45vw;";
        playAgain.style.fontSize = "50px";
        playAgain.style.zIndex = "1";

        playAgain.addEventListener("click", function() {
            endScreen.remove();
            gameResults.remove();
            playerScore = 0;
            computerScore = 0;
            playerScreenScore.textContent = "0";
            computerScreenScore.textContent = "0";
            roundResults.textContent = "";
            choice1.textContent = "";
            choice2.textContent = "";
            playAgain.remove();
        });
    }
        }

btnRock.addEventListener("click", function() {
    playerSelection = "Rock";
    choice1.textContent = "Rock";
    playRound();
});

btnPaper.addEventListener("click", function() {
    playerSelection = "Paper";
    choice1.textContent = "Paper";
    playRound();
});

btnScissors.addEventListener("click", function() {
    playerSelection = "Scissors";
    choice1.textContent = "Scissors";
    playRound();
});