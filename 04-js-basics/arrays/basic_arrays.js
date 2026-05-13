// Syntax for making arrays
let arr1 = new Array();
// or
let arr2 = [1, 2, 3];

// Arrays are 0 indexed
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// We can also access the last element of an array using at(-x)
console.log(fruits.at(-1));
console.log(fruits.at(-2));
console.log(fruits.at(-3));

// We can replace an element
fruits[2] = "Banana";
console.log(fruits[2]);
// We can also tell the length of an array
console.log(fruits.length);

// Arrays can be of mixed value
let arr = [
    "Apple",
    { name: "Kevin", age: 18 },
    true,
    function () {
        console.log("function");
    },
];
console.log(arr[1].age);
