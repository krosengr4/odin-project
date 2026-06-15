// The literal syntax to define an object
const myObject = {
    key: "value",
    number: 42,
    "middle name": "andrew",
    myFunction: function () {
        console.log("This is a function inside an object!");
    },
};

// There are two main ways to get info out of an object:
// dot notation
console.log(myObject.key);
myObject.myFunction();

// Bracket notation
console.log(myObject["middle name"]);
