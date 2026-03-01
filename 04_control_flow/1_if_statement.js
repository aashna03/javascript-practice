// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); // output: User power: fly, because when we check the condition score > 100, it evaluates to true, so it executes the code inside the if block, which assigns the value "fly" to the variable power and then logs the value of power to the console, so it shows us User power: fly in the console, and then it returns undefined, which is printed to the console by the console.log() statement that calls the if block, so it shows us undefined in the console after printing User power: fly
// }

// console.log(`User power: ${power}`);// ReferenceError: power is not defined, because power is declared with let, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block, it throws a ReferenceError saying that power is not defined




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// shorthand notation
// const balance1 = 900

// if (balance1 > 500) console.log("test"),console.log("test2");
// adding  more than 1 statement in if block without using curly braces will only execute the first statement, so in this case, it will only execute console.log("test") and it will not execute console.log("test2"), so it will only print "test" to the console and it will not print "test2" to the console, because without using curly braces
// for more than 1 statement separate then with comma then end it with semi colon
// but this is not a good practice, because it can lead to confusion and it can also lead to bugs in the code, so it is always better to use curly braces to define the block of code that should be executed when the condition is true, so that it is clear and easy to understand, and it also helps to avoid any potential bugs in the code, so it is always recommended to use curly braces even for single statement blocks, because it improves the readability and maintainability of the code, and it also helps to avoid any potential errors in the future when we add more statements to the block without using curly braces


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


// +==+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
}