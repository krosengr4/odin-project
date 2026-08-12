// ----- OPEN-CLOSED PRINCIPLE -----
// Code should be open for extension but closed for modification.
// If we want to add additional modification, we should be able to by extending the code, without
// the need to modify it.

// OG Code
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

// New code to add new type of vehicle (hybrid)
class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    // We override getRange() method to accomodate for new HybridVehicle without changing past code
    getRange() {
        return this.fuelCapacity * this.fuelEfficiency + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange());
console.log(hybridVehicle.getRange());
