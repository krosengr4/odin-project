// Using prototypal inheritance, we can make multiple objects that inherit from one another

// Constructor func for Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(`My name is ${this.name}`);
};

// Constructor function for User object
function User(name, age, userName) {
    this.name = name;
    this.age = age;
    this.userName = userName;
}

User.prototype.printInfo = function () {
    console.log(
        `Name: ${this.name}\nAge: ${this.age}\nUser name: ${this.userName}`,
    );
};

console.log(Object.getPrototypeOf(User.prototype)); //[Object: null prototype]

// This sets User object to inherit from Person
Object.setPrototypeOf(User.prototype, Person.prototype);
console.log(User.prototype); // Person { printInfo: [Function (anonymous)] }

const user1 = new User("Kevin", 37, "kros");
const user2 = new User("Gina", 5, "gina_mckgirbby");

user1.printInfo();
user2.printInfo();

// Since User object inherits from Person, User instances can use the sayName() function defined in Person object
user1.sayName();
user2.sayName();
