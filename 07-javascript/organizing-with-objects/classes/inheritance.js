// The "extends" keyword is used to create a class as a child of another constructor

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says hello!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        // Call the super class and pass in the name parameter
        super(name);
    }

    speak() {
        console.log(`${this.name} barks hello!`);
    }
}

const d = new Dog("Spot");
d.speak(); //Spot barks hello!

// If there is a constructor present in the subclass, it needs to first call super() before using this.
// The super keyword can also be used to call corresponding methods of super class
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a cat noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars!`);
    }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a cat noise.
// Fuzzy roars!
