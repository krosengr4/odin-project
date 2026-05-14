// Basic loops syntax
for (let i = 0; i < 5; i++) {
    console.log("i is:", i);
}

// Looping through a collection (the for...of loop)
const cats = [
    "Leopard",
    "Ocelot",
    "Jaguar",
    "Tiger",
    "Lion",
    "BengalclearReact",
];

for (const cat of cats) {
    console.log(cat);
}

// This can also be done with .forEach()
let nums = [1, 2, 3];
nums.forEach((num) => {
    console.log(num);
});

// You can exit loops with the "break" keyword
nums = [1, 2, 3, 4, 5];
for (const num of nums) {
    console.log(num);
    if (num === 3) {
        console.log("BREAK!");
        break;
    }
}

// You can also skip the iteration with the "continue" keyword
let names = ["Bob", "Earl", "Dave"];
for (const name of names) {
    if (name === "Earl") {
        console.log("SKIP");
        continue;
    }

    console.log(name);
}

function toUpper(string) {
    return string.toUpperCase();
}

// You can also use the .map() function to do something to each item in the collection
const upperCats = cats.map(toUpper);
console.log(upperCats);

// Cats that start with "l"
function lCat(cat) {
    return cat.startsWith("L");
}

// You can also use .filter() to create new collection with only items that match the filter
const filteredCats = cats.filter(lCat);
console.log(filteredCats);
