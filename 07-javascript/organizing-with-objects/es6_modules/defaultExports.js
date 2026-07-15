// With DEFAULT EXPORTS, we can only export a single thing
// This does not have a name attatched to it, we give it one when importing

export default "This is a default export from defaultExports.js";

// We can export both in the same file, but a file can only have ONE default export
function namedExportFunc() {
    console.log("This is a named export from defaultExports.js");
}

// When exporting functions, don't include the parameters
export { namedExportFunc };
