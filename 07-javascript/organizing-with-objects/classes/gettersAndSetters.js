// Getters and Setters are accessor properties. They are denoted by either "get" or "set"
// The getter works when an obj.propName is read.
// The setter works when an obj.propName is assigned.

let user = {
    firstName: "John",
    lastName: "Smith",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
};

// set fullName(value) is executed with the given value
user.fullName = "Alice Cooper";

console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);

// Smarter getters and setters
// Getters and setters can be used as "real" property values to gain more control over operations
// For instance, if we want to forbid too short names for player, we can have setter name and
// keep the value in a seperate property
let player = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("ERR: Name is too short, needs at least 4 characters!");
            return;
        }
        this._name = value;
    },
};

player.name = "Peter";
console.log(player.name);

player.name = "Bob"; // Err

// Adding logic into getters and setters
// For instance, a person object that holds name and birthday properties can return the users age
function Person(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        },
    });
}

let mark = new Person("Mark", new Date(1992, 6, 2));
console.log(mark.name);
console.log(mark.age);
