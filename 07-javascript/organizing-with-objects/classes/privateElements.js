/*
 * Private Elements
 * Private elements are class properties that are restricted to the class they are declared in.
 * They cannot be accessed or modified from outside that class.
 * Most class elements have their private counterparts. Constructors cannot be private in JS.
 *
 * Private elements are declared with hash names (#names), which are identifiers prefixed with "#"
 * You can draw relationship with underscore prefix convention (_privateField), but you can't dynamically
 * access it with bracket notation.
 */

class BankAccount {
    // Private fields, cannot be accessed outside the class
    #owner;
    #balance = 0;

    constructor(owner, initialDeposit) {
        this.#owner = owner;

        if (initialDeposit > 0) {
            this.#balance = initialDeposit;
        }
    }

    // Public getter to safely expose read-only data
    get balance() {
        return this.#balance;
    }

    // Public method to safely modify state
    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
            console.log(
                `Deposited: $${amount}. New balance: $${this.#balance}`,
            );
        }
    }

    // Public method that triggers data manipulation
    withdraw(amount) {
        if (this.#validateAmount(amount) && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(
                `Withdrew: $${amount}. Remaining balance: ${this.#balance}`,
            );
        } else {
            console.error("Insufficient funds or invalid amount.");
        }
    }

    #validateAmount(amount) {
        if (typeof amount !== "number" || amount <= 0 || Number.isNaN(amount)) {
            console.error("Transaction rejected: Invalid amount.");
            return false;
        }
        return true;
    }
}

const myAccont = new BankAccount("Kevin", 500);

console.log(myAccont.balance);
myAccont.deposit(150);

/*
 * This is private so the following lines will error
 * myAccont.balance = 10000000;
 * myAccount.validateAmount(-50);
 */
