// Constructor function for User object
function User(firstName, lastName, userName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;

    function sayHello() {
        return `Hello! This is the user ${this.userName}`;
    }
}

const user1 = new User("Mike", "Smith", "msmitty01");
const user2 = new User("Curtis", "McKenzie", "muckbro16");

// All objects in js have a prototype
// Use the .getPrototypeOf() method to check the objects prototype.
const user2Prototype = Object.getPrototypeOf(user2);
console.log(user2Prototype === User.prototype); //true

// The original object inherits all of its prototypes methods and fields
// Any fields or methods declared on an objects prototype will be available to all of that objects instances.
User.prototype.printFirstName = function () {
    console.log(`${this.firstName}`);
};
user1.printFirstName(); // Mike
user2.printFirstName(); // Curtis

// .valueOf() function comes from the Object object, which all objects inherit
console.log(user1.valueOf());
