// ----- SINGLE RESPONSIBILITY -----
// A class or object should only have one responsibility.
// The object can do multiple things, but everything should be part of one responsibility.

// RESPONSIBILITY: Manages data structure for the user
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// RESPONSIBILITY: Handles communication with the payment gateway
class PaymentProcessor {
    process(user, amount) {
        console.log(
            `Processing payment of $${amount} for ${user.name} via Stripe API`,
        );
        // Strictly payment logic
    }
}

// RESPONSIBILITY: Handles communication with notification systems
class NotificationService {
    sendEmailReceipt(user, amount) {
        console.log(`Sending receipt email to ${user.email} for $${amount}`);
        // Strictly messaging logic
    }
}

const payProc = new PaymentProcessor();
const notifServ = new NotificationService();
const user = new User("Mike", "mike@mail.com");

payProc.process(user, 17.99);
notifServ.sendEmailReceipt(user, 17.99);
/*
 * ----- BAD EXAMPLE -----
 *
 *  VIOLATION: This class has multiple reasons to change.
class UserPayment {
  constructor(user) {
    this.user = user;
  }

  // Task 1: Manage entity data
  getPaymentDetails() {
    return { name: this.user.name, email: this.user.email };
  }

  // Task 2: Process payments (API interactions)
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via Stripe API...`);
    // Payment gateway logic goes here
  }

  // Task 3: Send notifications (UI/Email logic)
  sendReceipt(amount) {
    console.log(`Sending receipt email to ${this.user.email} for $${amount}`);
    // Email sending logic goes here
  }
}
 */
