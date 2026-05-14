/*
 * JavaScript while loop
 * While the condition is truthy, the code inside the loop body is repeatedly executed.
 */
let i = 0;
while (i < 3) {
    console.log(`i = ${i}`);
    i++;
}

// Any expression or variable can be a loop condition, not just comparisons.
// The condition is converted to a boolean by while
let x = 3;
while (x) {
    // when x becomes 0, the condition becomes falsey
    console.log(`x = ${x}`);
    x--;
}

// The "do .. while" loop will execute the loop body, then check the condition.
let a = 0;
do {
    console.log(`a = ${a}`);
    a++;
} while (a < 3);
