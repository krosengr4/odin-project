// Given a array of strings, create a sorted copy but also keep the original
// array. Create function copySorted(arr) that returns a copy.

function copySorted(arr) {
    // .slice() can be used to create the copy, then .sort()
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS", "Go", "Rust"];
let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);
