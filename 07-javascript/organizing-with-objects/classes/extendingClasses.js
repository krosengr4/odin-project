// The extends keyword is used to create a class that is a child of another class

// Parent class
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    getInfo() {
        console.log(`Vehicle: ${this.brand}\nSpeed: ${this.speed} mph`);
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.brand} is now moving at ${this.speed} mph`);
    }
}

// Specialized derived class (child)
class ElectricCar extends Vehicle {
    constructor(brand, speed, batteryLife) {
        super(brand, speed);
        this.batteryLife = batteryLife;
    }

    // method unique to electric car
    charge() {
        this.batteryLife += 20;
        console.log(
            `${this.brand} is charging. Battery is at ${this.batteryLife}%.`,
        );
    }

    // Method overriding: customizing how an inherited method behaves
    accelerate() {
        this.speed += 25;
        console.log(
            `Instant torque! ${this.brand} rocketed to ${this.speed} mph`,
        );
    }
}

const myTesla = new ElectricCar("Tesla Model 3", 25, 90);

myTesla.getInfo();
myTesla.charge();
myTesla.accelerate();
