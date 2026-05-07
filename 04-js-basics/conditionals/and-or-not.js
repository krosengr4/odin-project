let weather = "sunny";
let temp = 92;

// Example of AND
if (weather === "sunny" && temp < 86) {
    console.log("Go to the beach! Enjoy the weather!");
} else if (weather == "sunny" && temp >= 86) {
    console.log("Go to the beach but make sure that you put on sunscreen");
} else {
    console.log("It is not sunny out, don't go to the beach.");
}

let isNiceDay = false;
let houseStatus = "on fire";

// Example of OR ||
if (isNiceDay || houseStatus === "on fire") {
    console.log("You should probably leave the house!");
} else {
    console.log("You can stay inside today.");
}

// Example of NOT operator
if (!(isNiceDay || houseStatus === "on fire")) {
    console.log("You can just stay home");
} else {
    console.log("You should leave the house!");
}
