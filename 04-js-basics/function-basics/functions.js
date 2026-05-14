// Functions are the main “building blocks” of the program. They allow the code to be called many
// times without repetition.

// Functions are declared with the keyword(function) the function name(showMessage) and the
// arguments it takes in(str)
function showMessage(str) {
    console.log(str);
}
// Then the function can be called by its name
showMessage("Hello, world!");

// When a function is called, but an argument isn't provided, the corresponding value becomes undefined.
// Because no argument was passed when calling showMessage(), this will print "undefined"
showMessage();

// A function can return a value back into the calling code
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result); // 30

// It is possible to return without a value. This causes the function to exit immediately.
function showMovie(age) {
    if (!age >= 18) {
        return;
    }
}
// If the func does not return a value, its the same as returning undefined
function doNothing() {
    return;
}
console.log(doNothing() === undefined); // true
