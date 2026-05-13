/*
 * Take in an array
 * For every even number, it will triple it
 * Then it will sum and return all those even numbers
 */

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const numTripled = 3 * array[i];
            sum += numTripled;
        }
    }
    return sum;
}

let arr = [1, 2, 3, 2];
const result = sumOfTripledEvens(arr);
console.log(result);
