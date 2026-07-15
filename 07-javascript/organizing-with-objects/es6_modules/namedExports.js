// With ES6 Modules, we can export things.

/*
 * NAMED EXPORT
 * We can either stick "export" infront of field
 */
export const namedExport = "This is a named export from namedExports.js";
export const greeting = "Hello, world!";

const name = "Kevin";
function introduce(name) {
    console.log(`Hello, my name is ${name}`);
}
// Or on seperate line
export { name, introduce };
