/*
 * Switch Statements are for when you need an if-else, but each choice you have needs a reasonable
 * of code to run, and/or the conditions are complex.
 * This example is fairly simple and just to show the syntax.
 */

weather = "snowing";

switch (weather) {
    case "sunny":
        console.log("Wear your sunblock!");
        break;
    case "raining":
        console.log("Don't forget an umbrella!");
        break;
    case "snowing":
        console.log("You better bundle up!");
        break;
    default:
        console.error("The weather is unclear...");
}
