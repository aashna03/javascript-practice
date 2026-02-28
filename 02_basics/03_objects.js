// singleton - made by constructor
// The Singleton pattern in JavaScript is a design pattern that ensures a class or object has only one instance throughout the entire application and provides a single, global point of access to that instance. 

// It is particularly useful for managing shared resources and global states, such as: 
// Logging systems: Ensuring all log messages are directed to a single logger instance.
// Configuration managers: Centralizing application settings so all components access the same parameters.
// Database connection pools: Managing a single point of database access efficiently across the application.
// Caching mechanisms: Implementing a global cache that can be accessed from anywhere, reducing redundant data fetching. 




// Object.create

// object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")


const JsUser = {
    name: "Aashna",
    "full name": "Aashna Agarwal",
    [mySym1]: "mykey1",
    mySym2: "mykey2",
    age: 18,
    location: "Jaipur",
    email: "aashna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // it is possible to access the value of a property using dot notation, but if the property name has spaces or special characters, we need to use bracket notation, so JsUser["full name"] is the correct way to access the value of the "full name" property, it will return "Aashna Agarwal", because "full name" is a property of the JsUser object with the value "Aashna Agarwal"
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) //for full name, we have to use bracket notation, because it has a space in the property name, so JsUser["full name"] is the correct way to access the value of the "full name" property, it will return "Aashna Agarwal", because "full name" is a property of the JsUser object with the value "Aashna Agarwal" [.] is used to access the value of a property using bracket notation, it takes the property name as a string, it is useful when the property name has spaces or special characters, it is also useful when the property name is stored in a variable, so JsUser[mySym1] is the correct way to access the value of the mySym1 property, it will return "mykey1", because mySym1 is a symbol with the description "key1" and it is used as a key for the property in the JsUser object
// console.log(JsUser.mySym1) // output: undefined, because mySym1 is a symbol with the description "key1" and it is used as a key for the property in the JsUser object, but it is not possible to access the value of a symbol property using dot notation, because it is a unique and immutable primitive value that can be used as a key for object properties, it is not enumerable, so it does not show up in for...in loops or Object.keys() method, it can only be accessed using the symbol itself as the key, so JsUser[mySym1] is the correct way to access the value of the mySym1 property, it will return "mykey1", because mySym1 is a symbol with the description "key1" and it is used as a key for the property in the JsUser object
// console.log(JsUser[mySym1]) // output: mykey1, a object
// console.log(JsUser.mySym2) // it is not possible to access the value of a symbol property using dot notation, because it is a unique and immutable primitive value that can be used as a key for object properties, it is not enumerable, so it does not show up in for...in loops or Object.keys() method, it can only be accessed using the symbol itself as the key, so JsUser[mySym1] is the correct way to access the value of the mySym1 property, it will return "mykey1", because mySym1 is a symbol with the description "key1" and it is used as a key for the property in the JsUser object
// console.log(JsUser.mySym2); // output: mykey2, a string

JsUser.email = "aashna@chatgpt.com"
// Object.freeze(JsUser) // it prevents the modification of existing properties and the addition of new properties to the object, it makes the object immutable, so we cannot change the value of the email property, it will not throw an error, but it will silently fail to change the value of the email property, so JsUser.email will still be "
JsUser.email = "aashna@microsoft.com"
// console.log(JsUser); // output: { name: 'Aashna', 'full name': 'Aashna Agarwal', [Symbol(key1)]: 'mykey1', mySym2: 'mykey2', age: 18, location: 'Jaipur', email: 'aashna@chatgpt.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Saturday' ] }, because Object.freeze() makes the object immutable, so we cannot change the value of the email property, it will not throw an error, but it will silently fail to change the value of the email property, so JsUser.email will still be "


// function stucture
// func = function(){}


// JsUser.blank1() = function(){}
// it is not possible to assign a function to a property that does not exist in the object, it will throw an error, because blank is not a property of the JsUser object, so we cannot assign a function to it, we can only assign a function to an existing property of the object, so we can assign a function to the greeting property of the JsUser object, but we cannot assign a function to the blank property of the JsUser object, because it does not exist in the object


// in js we can treat function as variable
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// JsUser.greeting()
// output: Hello JS user, it is possible to call a function that is assigned to a property of an object using dot notation, so JsUser.greeting() is the correct way to call the greeting function, it will execute the console.log("Hello JS user") statement inside the greeting function, so it prints "Hello JS user" to the console, and then it returns undefined, which is printed to the console by the console.log(JsUser.greeting()) statement

// console.log(JsUser.greeting());
// output:
// Hello JS user
// undefined
// here undefined is the return value of the greeting function, because it does not have a return statement, so it returns undefined by default, but it still executes the console.log("Hello JS user") statement inside the greeting function, so it prints "Hello JS user" to the console, and then it returns undefined, which is printed to the console by the console.log(JsUser.greeting()) statement

JsUser.cal = function(){
    sum = 2 + 3
}
// console.log(JsUser.cal());
// output: undefined, because the cal function does not have a return statement, so it returns undefined by default, but it still executes the sum = 2 + 3 statement inside the cal function, so it calculates the sum of 2 and 3 and assigns it to the sum variable, but it does not return the value of sum, so it returns undefined, which is printed to the console by the console.log(JsUser.cal()) statement

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this refers to the object that is calling the function, so in this case it refers to the JsUser object, so this.name is the name property of the JsUser object, which is "Aashna", so it prints "Hello JS user, Aashna" to the console
}

JsUser.greetingTwo();
// 

// objects created in 2 ways - object literals and object constructor