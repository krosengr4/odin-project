/*
 * Pseudocode:
 * Get users choice.
 *      User can choose 1 for rock, 2 for paper, or 3 for scissors.
 * Get computers choice.
 *      Use Math.random() to get a number from 1 - 3.
 *      Convert number into a string, 1 rock 2 paper 3 scissors.
 * Compare the user and computer choice and use the rock paper scissors rules to determine winner.
 */
console.log(
    "WELCOME TO ROCK-PAPER-SCISSORS OF DOOM! \nThink you're good enough to win? Prove it.\n",
);

const userChoice = getUserChoice();
const compChoice = getComputerChoice(3);

console.log("YOU SELECTED:", userChoice);
console.log("THE COMPUTER SELECTED:", compChoice);

compare(userChoice, compChoice);

function getComputerChoice(max) {
    let compChoiceInt = Math.floor(Math.random() * max);

    switch (compChoiceInt) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "ERROR! Computer number generated was not between 0 and 2!";
    }
}

function getUserChoice() {
    var input = prompt("Enter 1(rock) 2(scissors) 3(paper):");
    var userChoice = parseInt(input);

    switch (userChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        case 3:
            return "paper";
            break;
        default:
            alert("ERROR! PLEASE SELECT A NUMBER 1 - 3!");
            break;
    }
}

function compare(userChoice, compChoice) {
    if (userChoice === compChoice) {
        alert("It is a tie");
        return;
    }

    switch (userChoice) {
        case "rock":
            if (compChoice === "paper") {
                alert("The Computer Wins...");
            } else {
                alert("You Win!");
            }
            break;
        case "paper":
            if (compChoice === "scissors") {
                alert("The Computer Wins...");
            } else {
                alert("You Win!");
            }
            break;
        case "scissors":
            if (compChoice === "rock") {
                alert("The Computer Wins...");
            } else {
                alert("You Win!");
            }
            break;
    }
}
