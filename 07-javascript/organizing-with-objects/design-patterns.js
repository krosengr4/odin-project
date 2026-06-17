// In OOP, programs are designed by making them out of objects that interact with eachother.
// This means that logic can also be stored in objects via methods, not just data.

// For example, a car object can have data(make, model, etc.) but can also have logic that applies
// a discount to the price.
const car = {
    make: "Honda",
    model: "Accord",
    year: 2020,
    color: "white",
    priceUSD: 40000,

    applyDiscount: function (discountPercent) {
        const multiplier = 1 - discountPercent / 100;
        this.priceUSD *= multiplier;
    },

    getSummary() {
        return `${this.year} ${this.make} ${this.model} in ${this.color} priced at $${this.priceUSD}`;
    },
};

car.applyDiscount(13);
console.log(car.getSummary());
