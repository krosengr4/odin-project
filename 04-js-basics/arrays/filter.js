// The .filter() method is used to create a new array containing only elements from an existing array that meet a specific condition

const animals = ["lion", "tiger", "bear", "lemur"];
console.log(animals);

function startsWithL(str) {
    return str.startsWith("l");
}

const filteredAnimals = animals.filter(startsWithL);
console.log(filteredAnimals);

// Let's see how this works on the sum of tripled evens problem

const nums = [1, 2, 3, 4, 5, 6];

function isEven(num) {
    return num % 2 === 0;
}

function sumOfTripledEvens(array) {
    let sum = 0;
    const evenArr = array.filter(isEven);
    for (let num of evenArr) {
        const tripledNum = num * 3;
        sum += tripledNum;
    }
    return sum;
}

const result = sumOfTripledEvens(nums);
console.log(result);
