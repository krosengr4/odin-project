// For simple and concise syntax for creating functions, there are "arrow functions".
// Syntax: let func = (arg1, arg2, ..., argN) => expression;

// On the left of the "=>" there is the declaration and accepting arguments.
// On the right of the "=>" there is the expression or logic that is evaluated.
let add = (a, b) => a + b;
console.log(add(2, 3)); // 5
// This is the same as:
let diff = function (a, b) {
    return a - b;
};
console.log(diff(4, 2)); // 2

// This can be done to a func that takes no parameters
let sayHi = () => console.log("Hi!");
sayHi();

// Sometimes a more complex function is needed. We can enclose the funciton body with curly braces
// *** With curly braces, a return statement is required ***Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
let halfTheSum = (a, b) => {
    let sum = a + b;
    return sum / 2;
};
console.log(halfTheSum(10, 6)); // 8
