// Factory functions are any regular function that creates and returns a new object, that isn't a
// constructor.

// While similar to constructors, factory functions levy the power of closures.
// Instead of using the new keyword to create an object, they set up and return the new object when
// you call the factory funciton.

// This is a basic constructor
function User(name) {
    this.name = name;
    this.discordName = "@" + name;
}

// Refactoring our constructor into a factory
function createUser(name) {
    const discordName = "@" + name;
    const userObject = { name, discordName }; //<--- This is a way to create an object with name and discordName

    return userObject;
}

const newUser = createUser("mark");
console.log(newUser); // { name: 'mark', discordName: '@mark' }
console.log(typeof newUser); // object
