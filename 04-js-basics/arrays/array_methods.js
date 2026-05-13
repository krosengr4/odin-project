let names = ["Kevin", "Alex", "Jeremy"];
console.log(names); // Kevin, Alex, Jeremy

// Pop will extract the last element of an array and returns it
names.pop();
console.log(names); // Kevin, Alex

// Push appends an element to the end of an array
names.push("Sarah");
console.log(names); // Kevin, Alex, Sarah

// shift extracts the first element of the array and returns it
names.shift();
console.log(names); // Alex, Sarah

// unshift adds the element to the beginning of an array
names.unshift("Bert");
console.log(names); // Bert, Alex, Sarah

// ARRAY SPLICE
// splice can insert, remove and replace elements

// First, lets see how splice() can remove elements
let animals = ["Bear", "Snake", "Dolphin", "Dog"];
console.log(animals);
animals.splice(2, 1); // From index 2 remove element 1
console.log(animals); // Bear, Snake, Dog

// You can also use splice() to delete multiple elements
animals = ["Bear", "Snake", "Dolphin", "Dog"];
animals.splice(1, 3); // Remove elements 1 to 3
console.log(animals); // Bear

// Now let's use splice() to replace
let arr = ["I", "Study", "JavaScript"];
console.log(arr);
arr.splice(0, 3, "Let's", "Dance"); // Remove elements 0 - 3 and replace with"Let's" "Dance"
console.log(arr);

// Now to use splice() to insert elements
let nums = [1, 2, 5];
console.log(nums); // 1, 2, 5
nums.splice(2, 0, 3, 4); // From index 1, delete 0 elements, insert 3 and 4
console.log(nums);

// ARRAY SLICE
// .slice() returns a new array copying all items from index (start, end)

let chars = ["a", "e", "i", "o", "u", "y"];
let sliceChars = chars.slice(4); // Copy from 4th element(u) to end
console.log(sliceChars); // u, y
console.log(chars.slice(2, 5)); // i, o, u

// ARRAY CONCAT
// Creates a new array that includes values from other arrays and additional items

nums = [1, 2, 3];
console.log(nums.concat(4, 5)); // 1, 2, 3, 4, 5
console.log(nums.concat(chars)); // 1, 2, 3, a, e, i, o, u
