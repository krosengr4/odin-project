// To import these variables, we can use the "import" keyword and the file path
import { introduce, name, greeting, namedExport } from "./namedExports.js";

console.log(greeting); // Hello, world!
console.log(namedExport); // Goodbye everyone!
introduce(name); // Hello, my name is Kevin

// Importing both default and named exports
import defaultExp, { namedExportFunc } from "./defaultExports.js";
console.log(defaultExp);
namedExportFunc();
