// Write a function that changes dash-seperated words like "my-short-string"
// into camel case "myShortString"

const header = document.querySelector("h1");
let word = header.innerHTML;

function camelize(str) {
    console.log(str);
    return str
        .split("-")
        .map((word, index) =>
            index == 0 ? word : word[0].toUpperCase() + word.slice(1),
        )
        .join("");
}

header.innerHTML = camelize(word);
console.log(word);
