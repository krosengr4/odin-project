let user1 = new Object();
// Objects can store multiple data types
user1 = {
    name: "John",
    age: 30,
};
console.log(`User Name: ${user1.name}`);

// To add a property
user1.isAdmin = true;
console.log(`Is user1 admin: ${user1.isAdmin}`);

// To delete a property
delete user1.isAdmin;

// You can also use multiword property names but they must be qouted
user1 = {
    name: "Kevin",
    age: 26,
    "likes sports": true,
};
// Then use square brackets to access that multiword property
console.log(user1["likes sports"]);

// We can use functions to create objects
function makePerson(name, age, job) {
    return {
        name, // same as name: name,
        age, // same as age: age,
        job, // same as job: job,
    };
}

let person = makePerson("Kevin", 26, "Software Engineer");
console.log(`This persons name is ${person.name} and he is a ${person.job}`);

// There is no error if the object property doesn't exist
let animal = {};
console.log(animal.age === undefined); // This will be true

// There is also a special in operator
animal = {
    kind: "zebra",
    age: 10,
};
console.log("age" in animal); // true

// The for .. in loop
let cat = {
    name: "Bambu",
    type: "Tuxedo",
};
cat.age = 11;

for (let key in cat) {
    console.log(key); //name, age, type
    console.log(cat[key]); // Bambu, 11, Tuxedo
}
