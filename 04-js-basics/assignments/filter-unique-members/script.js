// Create a function unique(arr) that should return an array with unique
// items of arr.

function unique(arr) {
    let result = [];

    for (str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = [
    "Kevin",
    "Kevin",
    "Billy",
    "Kevin",
    "Kevin",
    "Kevin",
    "Kevin",
    "Kevin",
    "Billy",
    "Kevin",
    "Kevin",
    "Roger",
    "Kevin",
];
console.log(strings);

let uniqueArr = unique(strings);
console.log(uniqueArr);
