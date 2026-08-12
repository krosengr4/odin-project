// ----- INTERFACE SEGREGATION -----
// An entity should never be forced to implement an interface that contains elements which it will
// never use.

class Penguin {}

class Bird {}

const flyer = {
    fly() {
        console.log("Flap flap, I am flying!");
    },
};

// Adding the flying function, only to the classes that require it.
Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly();

const penguin = new Penguin();
// This gives an error
// penguin.fly();
