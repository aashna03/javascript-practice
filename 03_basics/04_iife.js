function coded_normal(){
    // named IIFE
    console.log(`DB CONNECTED`);
}
// coded_normal() // output: DB CONNECTED, because when we call the coded_normal function, it executes the code inside the function and prints DB CONNECTED to the console
// we now need to remove this function call to execute the function immediately after it is defined, so we can wrap the function definition in parenthesis and then add another pair of parenthesis at the end to call the function immediately, so it becomes an IIFE (Immediately Invoked Function Expression), which is a function that is executed immediately after it is defined, so it will execute the code inside the function and print DB CONNECTED to the console without needing to call the function separately


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that is executed immediately after it is defined, it is a design pattern which produces a lexical scope using JavaScript's function scoping. It is also known as a self-executing anonymous function, because it does not have a name and it is executed immediately after it is defined. It is often used to create a private scope for variables and functions, so that they do not pollute the global scope and do not interfere with other code in the global scope. It is also used to create a closure, which allows us to access variables and functions from the outer scope even after the outer function has finished executing.

// for iife follow the below steps:
// remove function calling
// put parenthises () at end
// put parenthises () around function definition (function coded(){})

(function coded_iife(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon is required at the end of an IIFE, because it is a function expression and it needs to be terminated with a semicolon, otherwise it will throw an error if there is another statement after the IIFE that is not separated by a semicolon, so it is a good practice to always end an IIFE with a semicolon to avoid any potential errors in the future when we add more code after the IIFE


// with arrow function
// unnamed iife
( (name) => { // argument "name"
    console.log(`DB CONNECTED TWO ${name}`);
} )('aashna'); // passing argument to IIFE "name" with value "aashna"
// output: DB CONNECTED TWO aashna, because when we define the IIFE with an arrow function, it takes an argument "name" and then it logs the value of name to the console, so when we call the IIFE with the argument "aashna", it executes the code inside the IIFE and prints DB CONNECTED TWO aashna to the console, and then it returns undefined, which is printed to the console by the console.log() statement that calls the IIFE, so it shows us undefined in the console after printing DB CONNECTED TWO aashna