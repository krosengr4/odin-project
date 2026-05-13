// The arr.sort() method sorts the array in place, changing its element order.
// It returns the sorted array but the returned value is usually ignored as arr
// is modified itself.

let nums = [3, 6, 1, 4, 2];
console.log(nums);

nums.sort();
console.log(nums);

// However, if we have 1, 2, 15 in an array... 15 will come before 2. This is
// because these numbers are sorted as strings first.
nums = [1, 2, 15];
console.log(nums);
nums.sort();
console.log(nums);

// To use our own sorting order, we need to provide a function
function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

nums = [4, 1, 16, 5, 27];
console.log(nums);

nums.sort(compare);
console.log(nums);

// A comparison function is only required to return a positive number for
// "greater than" and a negative for "less than". We can write a shorter function
// for this.
nums = [4, 1, 16, 5, 27];
console.log(nums);
nums.sort(function (a, b) {
    return a - b;
});
console.log(nums);

// This can be simplified using arrow funcitons
nums = [4, 1, 16, 5, 27];
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);
