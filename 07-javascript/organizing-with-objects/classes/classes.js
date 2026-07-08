/*
 * Classes are a template for creating objects.
 * They encapsulate data with code to work on that data.
 *
 * Within the class body {} is where you define class elements
 * Class elements can be characterized by 3 aspects:
 * 1. Kind (getter, setter, method, or field)
 * 2. Location (static or instance)
 * 3. Visibility (public or private)
 */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.area); // 100
console.log(...square.getSides()); // 10 10 10 10
