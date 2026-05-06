# DATA TYPES

## The 8 Different Data Types in JavaScript

### 1. Numbers
- Represents both integers and floating types
- Other than regular numbers, there is also "special numeric values":
    - Infinity
    - -Infinity
    - NaN (Not a Number)

### 2. BigInt
- In JavaScript, it is unsafe for all odd numbers greater than (2^53 - 1) to be stored in a number type.
- BigInt type was added to represent integers of arbitrary length.
- It is created by appending n to the end of an integer.

### 3. String
- A string is just characters surrounded by quotes.

### 4. Boolean (logical type)
- This only holds either true or false.

### 5. The "null" Value
- The null value forms a seperate type of its own which only contains the null value.
- It is used when the value is nothing, empty or unknown.

### 6. Undefined Value
- This means "value not assigned"
- If a variable is declared but not given a value.

### 7. Objects and Symbols
- *Object* types are used to store collections of data and more complex entities.
- Unlike all other types, which are called primitive, because they can contain a single thing.
- The *symbol* type is used to create unique identifiers for objects.

### 8. The typeof Operator
- This is for when we want to tell the type of operand.
- Ex:
    - typeof 19 //number
    - typeof "foo" //string
    - typeof( null ) //object
