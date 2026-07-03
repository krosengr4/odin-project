// Oftentimes you dont need a factory to produce multiple objects.
// Instead, wrap sections of code together, hiding the properties not wanted as private, elsewhere.

// Immediately Invoked Factory Expression (IIFE) is where you wrap the factory function in
// parenthesis, and immediately calling (invoking) it.
// IIFE's are function expressions that are called immediately.
// (() => console.log("foo"))();

// Calculator factory that keeps lastResult property private.
// The purpose is so that lastResult value is reassigned within the factory.
// This prevents direct reassignment somewhere else like "calculator.lastResult = 12;"
const calculator = (() => {
    let lastResult;

    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    };

    const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    };

    const multiply = (a, b) => {
        lastResult = a * b;
        return lastResult;
    };

    const divide = (a, b) => {
        lastResult = a / b;
        return lastResult;
    };

    const getResult = () => lastResult;

    return { add, subtract, multiply, divide, getResult };
})();

console.log(calculator.add(7, 3)); // 10
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(2, 8)); // 16
console.log(calculator.divide(10, 5)); // 2
