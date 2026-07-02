// A closure is where an outer function returns an inner function.
// The inner func retains the values of the outer func even after the outer func is done executing.

function makeAddingFunction(firstNumber) {
    // firstNumber parameter is scoped anywhere within makeAddingFunciton
    // This includes the inner function that gets returned

    // The returned function doesn't have to be named
    return function returnedFunction(secondNumber) {
        // secondNumber parameter is only scoped within returnedFunction
        return firstNumber + secondNumber;
    };
}

// We can now create our function by calling makeAddingFunction();
// Instead of writing a new function everytime, we use a function to create a function for us.
// Ex: writing a toFormattedDateString(date) function and call it several times with many dates

// A closure is formed around the firstNumber parameter
// firstNumber is still able to be accessed even after makeAddingFunction finishes
const add5 = makeAddingFunction(5);
let sum = add5(2);
console.log(sum); // 7

// add5 is a function that will add 5 to whatever number is passed in
console.log(typeof add5); // function

const add8 = makeAddingFunction(8);
sum = add8(4);
console.log(sum); //12

const add8432905 = makeAddingFunction(8432905);
sum = add8432905(325402582);
console.log(sum); //333835487
