// Create a function shuffle(arr) that randomly reorders elements of an array.

function shuffle(arr) {
    // We can use Math.random() for randomness of shuffle
    // We can use arr.sort() for reordering
    return arr.sort(() => Math.random() - 0.5);
}

let nums = [3, 1, 2];

shuffle(nums);
console.log(nums);
shuffle(nums);
console.log(nums);
shuffle(nums);
console.log(nums);
