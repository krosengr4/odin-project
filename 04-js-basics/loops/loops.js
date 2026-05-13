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
