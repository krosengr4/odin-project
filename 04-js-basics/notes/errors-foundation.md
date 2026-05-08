# Understanding Errors

- An error is an object built into the JS language.
- Errors consist of a name/type and message.

- When an error is "thrown", the errors  type/name and message is displayed.
- Also displayed is the file and the line number where the error is occurring.
- Sometimes the console will also display the column(or character) in the line where the error is occurring.
- Another important part of an error is the stack trace.
    - This helps you understand when the error was thrown and what functions were called that lead up to the error.

## Common types of errors

### Syntax Error
- Occurs when the code trying to run is now written in accordance with the grammar rules of JS.

### Reference Error
- Thrown when referring to a variable that is not declared and/or initialized in the current scope.
- Can be thrown in many instances and the errors message differs based on what the cause is. 
    - ex: calling a var that is never declared versus calling a var that is declared after it is called.

### Type Error
- This error is thrown for a few different reasons:
    - An operand or argument passed to a function is not of the type expected by that operator or function.
    - When attempting to modify a value that cannot be changed.
        - Ex: "str1.push is not a function" is saying that the push() function does not take a string.
    - When trying to use a value in an inappropriate way.


### Errors vs Warning
- Errors will stop the execution of your program.
- Warnings provide insight on potential problems, but won't crash your program at run time.
