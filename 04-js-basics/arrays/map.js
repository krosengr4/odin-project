// The .map() method lets you transform every element in an array and produce a new array
function toUpper(str) {
    return str.toUpperCase();
}

const names = ["Kevin", "Bob", "Ricky"];
console.log(names);
const upperNames = names.map(toUpper);
console.log(upperNames);

// Another example using numbers

let nums = [1, 2, 3, 4, 5];

function doubler(num) {
    return num * 2;
}

console.log(nums);
const doubleNums = nums.map(doubler);
console.log(doubleNums);
