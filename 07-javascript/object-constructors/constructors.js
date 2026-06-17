// When you have a specific type of object that you need to make multiple of (ex: person, book, etc.)
// A better way to make multiple of these objects is to use a constructor.

// Person constructor function to create person object
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Use "new" keyword to make new instance of object
const person = new Person("Kevin", 527);
person.introduce();
