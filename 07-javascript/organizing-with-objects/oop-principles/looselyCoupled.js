// ----- LOOSELY COUPLED OBJECTS -----
// The point of this principle is to make sure that individual objects can stand on there own as much as possible.
// Two or more objects interact with each other using a predefined public interface w/out knowing
// what the other one does.

// 1. Define independent payment strategies
class StripePayment {
    process(amount) {
        console.log(`Processing $${amount} securely via Stripe.`);
    }
}

class Crypto {
    process(amount) {
        console.log(`Processing $${amount} securely via Bitcoin.`);
    }
}

// 2. Define the dependent class that relies on abstraction
class OrderProcessor {
    // The dependency in injected from the outside
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    completeOrder(amount) {
        // Calls a generic method, blind to the underlying vendor
        this.paymentProcessor.process(amount);
    }
}

// 3. Execution (We can swap vendors instantly without touching OrderProcessor)
const stripeProcessor = new OrderProcessor(new StripePayment());
stripeProcessor.completeOrder(50.99);

const cryptoProcessor = new OrderProcessor(new Crypto());
cryptoProcessor.completeOrder(69.99);
