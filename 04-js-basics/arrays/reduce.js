/*
 * The .reduce() method will iterate through an array and uses a "reducer"
 * function to condense all elements into a single output value.
 *
 * This callback function takes two parameters:
 * 1. The accumulator (current value of the result at that point in the loop).
 *      This will be set to the first element in the array if no initialValue is provided.
 * 2. The item (or array) currently being iterated on.
 */

const nums = [1, 2, 3, 4, 5];
const productOfNums = nums.reduce((total, currentItem) => {
    return total * currentItem;
});
console.log(nums);
console.log(productOfNums);
