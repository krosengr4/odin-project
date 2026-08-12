// ----- LISKOV SUBSTITUTION -----
// Any class should be substitutable for its parent class without unexpected consequences.
// Example: if the classes Cat and Dog extend Animal class, we would expect all functionality
// to be help within the parent Animal class.

// A common example of this is the 'Square and Rectangle problem'
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    setHeight(newHeight) {
        // If statement to check if the instance is a square
        if (this.height === this.width) {
            this.width = newHeight;
        }
        this.height = newHeight;
    }

    calculateArea() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {}

const rectangle = new Rectangle(5, 10);
const square = new Square(4, 4);

console.log(
    `Rectangle:
    Height: ${rectangle.height} Width: ${rectangle.width} Area: ${rectangle.calculateArea()}`,
);
console.log(
    `Square:
    Height: ${square.height} Width: ${square.width} Area: ${square.calculateArea()}`,
);

// Without the if statement in Rectangle class, this would be wrong
square.setHeight(5);
console.log(
    `Square:
    Height: ${square.height} Width: ${square.width} Area: ${square.calculateArea()}`,
);
