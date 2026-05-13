/*
 * Take in an array
 * For every even number, it will triple it
 * Then it will sum and return all those even numbers
 */

function isEven(num) {
    return num % 2 === 0;
}

function times3(num) {
    return num * 3;
}

function sumOfTripledEvens(arr) {
    return arr
        .filter(isEven)
        .map(times3)
        .reduce((acc, curr) => acc + curr);
}

let arr = [1, 2, 3, 4];
const result = sumOfTripledEvens(arr);
console.log(result);
