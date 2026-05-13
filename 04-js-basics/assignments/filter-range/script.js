// Write a function filterRange(arr, a, b) that gets an array, and removes all
// values EXCPET those that are between a and b.

let arr = [5, 3, 8, 1];

let splicedArr = filterRangeInPlace(arr, 1, 4);
console.log(splicedArr);

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}
