const score = 400
// console.log(score);

const balance = new Number(100.3456)
// console.log(balance); // console.log(typeof balance); // it is an object, because it is created using Number constructor, it is not a primitive number

// console.log(balance.toString().length); // it converts the number to a string and then returns the length of the string, it does not change the original number, because numbers are immutable in JavaScript // output: 3
// console.log(balance.toFixed(2)); // it returns a string representation of the number with the specified number of digits after the decimal point, it does not change the original number, because numbers are immutable in JavaScript // output: 100.35

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // it returns a string representation of the number with the specified number of significant digits, it does not change the original number, because numbers are immutable in JavaScript // output: 123.9
// console.log(otherNumber.toPrecision(2)); // output: 1.2e+2
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // it returns a string with a language-sensitive representation of the number, it takes a parameter, the locale, it formats the number according to the locale, if the locale is not provided, it uses the default locale of the environment // output: 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // it is a built-in object that has properties and methods for mathematical constants and functions. It is not a function, so we cannot call it like a function, but we can use its properties and methods to perform mathematical operations.
// console.log(Math.abs(-4)); // output: 4, it returns the absolute value of a number, it does not change the original number, because numbers are immutable in JavaScript
// console.log(Math.round(4.6)); // output: 5, it returns the value of a number rounded to the nearest integer, it does not change the original number, because numbers are immutable in JavaScript
// console.log(Math.ceil(4.2)); // output: 5, it returns the smallest integer greater than or equal to a number, it does not change the original number, because numbers are immutable in JavaScript
// console.log(Math.floor(4.9)); // output: 4, it returns the largest integer less than or equal to a number, it does not change the original number, because numbers are immutable in JavaScript
// console.log(Math.min(4, 3, 6, 8)); // output: 3, it returns the smallest of zero or more numbers, it does not change the original numbers, because numbers are immutable in JavaScript
// console.log(Math.max(4, 3, 6, 8)); // output: 8, it returns the largest of zero or more numbers, it does not change the original numbers, because numbers are immutable in JavaScript

console.log(Math.random()); // it returns a random number between 0 (inclusive) and 1 (exclusive), it does not change the original number, because numbers are immutable in JavaScript
console.log((Math.random()*10) + 1); // it returns a random number between 1 (inclusive) and 11 (exclusive), it does not change the original number, because numbers are immutable in JavaScript
console.log(Math.floor(Math.random()*10) + 1); // it returns a random integer between 1 (inclusive) and 10 (inclusive), it does not change the original number, because numbers are immutable in JavaScript
// +1 is added to avoid getting 0 as a random number, because Math.random() can return 0, but it cannot return 1, so if we want to get a random number between 1 and 10, we need to add 1 to the result of Math.random()*10, so that we can get a random number between 1 and 10, instead of getting a random number between 0 and 9.
// if we want to get a random number between min and max, we can use the following formula: Math.floor(Math.random() * (max - min + 1)) + min, where min is the minimum number and max is the maximum number, it does not change the original numbers, because numbers are immutable in JavaScript
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it returns a random integer between min (inclusive) and max (inclusive)