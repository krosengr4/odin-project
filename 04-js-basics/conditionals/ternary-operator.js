/*
 * A ternary conditional operator is a bit of syntax that tests a condition for true or false.
 * If true it returns one value, and if false it returns a different value.
 * This is like if-else or switch operators, however it only checks a condition for true/false.
 * Syntax:
 * condition ? run true code : run false code;
 */

const ifTeamWon = false;

ifTeamWon
    ? console.log("Congratulations!")
    : console.log("Better luck next time.");
