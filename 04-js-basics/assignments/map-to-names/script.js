// You have an array of user objects, each one has a user.name. Write code that converts it into an
// array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// SOLUTION
let userNames = [];
for (let user in users) {
    userNames.push(users[user].name);
}
console.log(userNames);

// Other solution
let names = users.map((item) => item.name);
console.log(names);
