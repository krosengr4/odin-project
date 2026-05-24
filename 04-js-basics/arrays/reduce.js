/*
 * The .reduce() method will iterate through an array and uses a "reducer"
 * function to condense all elements into a single output value.
 *
 * Parameters:
 * 1. (Required) accumulator / total:
 *          (current value of the result at that point in the loop).
 *          This will be set to the first element in the array if no initialValue is provided.
 * 2. (Required) currentValue:
 *          The item (or array) currently being iterated on.
 * 3. (Optional) currentIndex:
 *          The index position of currentValue in the array.
 * 4. (Optional) array:
 *          The array the current element belongs to.
 */

const nums = [1, 2, 3, 4, 5];
const productOfNums = nums.reduce((total, currentItem) => {
    return total * currentItem;
});
console.log(nums);
console.log(productOfNums);
