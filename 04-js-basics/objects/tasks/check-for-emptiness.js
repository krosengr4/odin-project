// Write a funciton isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let user = {};
console.log(isEmpty(user));

user = {
    name: "Joe",
};
console.log(isEmpty(user));
