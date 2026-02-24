//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// call by value => when we assign a primitive value to a variable, it stores the actual value in the variable. When we copy that variable to another variable, it creates a new copy of the value in memory. So, both variables are independent of each other and changing one variable does not affect the other variable.
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // Symbol is a unique and immutable primitive value that can be used as a key for object properties. Even if two symbols have the same description, they are different and unique. So, id and anotherId are different symbols, even though they have the same description '123'.
const anotherId = Symbol('123')

console.log(id === anotherId); // false, because id and anotherId are different symbols, even though they have the same description '123'.

// const bigNumber = 3456543576654356754n // BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive. BigInt literals are created by appending 'n' to the end of an integer literal. So, bigNumber is a BigInt value that can represent a whole number larger than 2^53 - 1.



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// stack => primitive data types
// heap => non primitive data types

let myVariable = "aashna"
anotherVariable = myVariable
anotherVariable = "piddi"

console.log(myVariable); // aashna
console.log(anotherVariable); // piddi

//
let myObj1 = {
    name: "aashna",
    skill: "backend",
}
let myObj2 = myObj1

myObj2.skill = "frontend"

console.log(myObj1); // { name: 'aashna', skill: 'frontend' }
console.log(myObj2); // { name: 'aashna', skill: 'frontend' }

