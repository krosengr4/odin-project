function add7(n) {
    return n + 7;
}

function multiply(x, y) {
    return x * y;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str) {
    return str.slice(-1);
}

let word = "dGkcI eRRgt";

console.log(add7(3));
console.log(multiply(4, 5));
console.log(capitalize(word));
console.log(lastLetter(word));
