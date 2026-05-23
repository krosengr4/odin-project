const playBtn = document.querySelector(".play");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const choiceBtns = document.querySelector(".choice");
const resultSection = document.querySelector(".results");
const overallUserWins = document.querySelector(".overall-user-wins");
const overallCompWins = document.querySelector(".overall-comp-wins");
const overallTies = document.querySelector(".overall-ties");

let compChoice = "";
let userWins = 0;
let compWins = 0;
let tieCount = 0;

function play() {
    resultSection.innerHTML = "";
    compChoice = getCompChoice();

    playBtn.style.display = "none";
    rockBtn.style.display = "inline-block";
    paperBtn.style.display = "inline-block";
    scissorsBtn.style.display = "inline-block";
}

function hideChoices() {
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
}

function updateOverall() {
    overallUserWins.textContent = `User Wins: ${userWins}`;
    overallCompWins.textContent = `Computer Wins: ${compWins}`;
    overallTies.textContent = `Ties: ${tieCount}`;
}

playBtn.addEventListener("click", play);

rockBtn.addEventListener("click", () => {
    hideChoices();
    compare("rock", compChoice);
});

paperBtn.addEventListener("click", () => {
    hideChoices();
    compare("paper", compChoice);
});

scissorsBtn.addEventListener("click", () => {
    hideChoices();
    compare("scissors", compChoice);
});

function getCompChoice() {
    let compChoiceInt = Math.floor(Math.random() * 3);

    switch (compChoiceInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "ERROR! Did not generate number between 0 and 2!";
    }
}

function determineResult(userChoice, compChoice) {
    if (userChoice === compChoice) {
        tieCount++;
        return "It was a Tie...";
    }

    switch (userChoice) {
        case "rock":
            if (compChoice === "paper") {
                compWins++;
                return "Computer Wins.";
            } else {
                userWins++;
                return "User Wins!";
            }
        case "paper":
            if (compChoice === "rock") {
                userWins++;
                return "User Wins!";
            } else {
                compWins++;
                return "Computer Wins.";
            }
        case "scissors":
            if (compChoice === "rock") {
                compWins++;
                return "Computer Wins.";
            } else {
                userWins++;
                return "User Wins!";
            }
    }
}

function compare(userChoice, compChoice) {
    console.log(userWins);
    var userResult = document.createElement("h3");
    var compResult = document.createElement("h3");
    userResult.textContent = `User Selection: ${userChoice.toUpperCase()}`;
    compResult.textContent = `Computer Selection: ${compChoice.toUpperCase()}`;

    var result = document.createElement("h3");
    result.textContent = determineResult(userChoice, compChoice);

    resultSection.appendChild(result);
    resultSection.appendChild(userResult);
    resultSection.appendChild(compResult);

    updateOverall();
    playAgain();
}

function playAgain() {
    var playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again?";
    playAgainBtn.classList.add("play-again");
    playAgainBtn.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center; text-align: center;",
    );
    resultSection.appendChild(playAgainBtn);

    playAgainBtn.addEventListener("click", () => {
        console.log("play again");
        play();
    });
}
