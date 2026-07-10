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

class ClassWithPrivateFields {
    #privateField;

    constructor() {
        delete this.#privateField; // Syntax error
        this.#undeclaredField = 42; // Syntax error
    }
}

const instance = new ClassWithPrivateFields();
instance.#privateField; // Syntax error


