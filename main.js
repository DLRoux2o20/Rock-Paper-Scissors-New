function defineA() {
    return Math.floor((Math.random() * 3));
}

let a = defineA();
let computerScore = 0;
let playerScore = 0;
let choiceInvalidDetector = 0;

function getComputerChoice() {

    if (a === 0) {
        return "Rock";
    } else if (a === 1) {
        return "Paper";
    }
    return "Scissors"; 
}

let computerChoice = getComputerChoice();

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        function playRound(playerSelection, computerSelection) {
    computerChoice = getComputerChoice();
    let playerText = prompt("What is your choice?");

    if (playerText) {
        let playerSelection = playerText.toLowerCase();
        let playerSelectionCapital = (playerSelection.charAt(0)).toUpperCase() + playerSelection.substr(1, (playerSelection.length) - 1);
        alert(computerChoice + " " + "vs" + " " + playerSelectionCapital);

        console.log("Computer Choice: " + computerChoice);
        console.log("Your Choice: " + playerSelectionCapital);

        if (playerSelection === "rock") {
            var b = 0;
        } else if (playerSelection === "paper") {
            var b = 1;
        } else if (playerSelection === "scissors") {
            var b = 2;
        } else {
            alert("Choice invalid");
            i--;
            choiceInvalidDetector = 1;
        }

        if (choiceInvalidDetector === 1) {
            console.log("Choice Invalid");
            console.log(" ");
            choiceInvalidDetector = 0;
            a = defineA();
        } else if (a === 0 && b === 2) {
            console.log(`You lose! Rock beats Scissors`);
            computerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
            a = defineA();
        } else if (a === 2 && b === 0) {
            console.log("You won! Rock beats Scissors");
            playerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
            a = defineA();
        } else if (a > b) {
            console.log(`You lost! ${computerChoice} beats ${playerSelectionCapital}`);
            computerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
            a = defineA();
        } else if (a < b) {
            console.log(`You won! ${playerSelectionCapital} beats ${computerChoice}`);
            playerScore += 1;
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log(" ");
            a = defineA();
        } else if (a === b) {
            console.log("It was a tie");
            a = defineA();
        }

    } else {
        alert("Please enter choice");
    }

}
    }
}

game();