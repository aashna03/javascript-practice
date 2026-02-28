const user = {
    username: "aashna",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this keyword refers to the object that is calling the function, so in this case, it refers to the user object, so this.username is equivalent to user.username, which is "aashna", so it prints "aashna , welcome to website" to the console
        console.log(this);
        // this keyword refers to the object that is calling the function, so in this case, it refers to the user object, so it shows us the user object in the console
    }

}

// user.welcomeMessage()
// // output: aashna , welcome to website, because when we call the welcomeMessage function using user.welcomeMessage(), it executes the code inside the welcomeMessage function, which logs the value of this.username to the console, and since this refers to the user object, this.username is equivalent to user.username, which is "aashna", so it prints "aashna , welcome to website" to the console, and then it logs the value of this to the console, which is the user object itself, so it shows us the user object in the console
// user.username = "sam" // context value is changed
// user.welcomeMessage()
// // output: sam , welcome to website, because when we change the value of user.username to "sam", it updates the username property of the user object, so when we call the welcomeMessage function again using user.welcomeMessage(), it executes the code inside the welcomeMessage function, which logs the value of this.username to the console, and since this refers to the user object, this.username is equivalent to user.username, which is now "sam", so it prints "sam , welcome to website" to the console, and then it logs the value of this to the console, which is the user object itself with the updated username property, so it shows us the updated user object in the console

// console.log("this value -->")
// console.log(this);
// // output: {} , because when we log the value of this to the console in the global scope, it refers to the global object, which is an empty object in this case, so it shows us an empty object in the console, but in a browser environment, it would refer to the window object, which is the global object in browsers, so it would show us the window object in the console
// // for browser this would refer to the window object, but in nodejs it refers to an empty object, because in nodejs, the global object is not the same as the this value in the global scope, so it shows us an empty object in the console when we log this in the global scope in nodejs



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function coded(){
    let username = "aashna"
    // console.log(this);
    /*
        <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],    
        setImmediate: [Function: setImmediate] {       
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],      
        clearTimeout: [Function: clearTimeout],        
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],    
        structuredClone: [Getter/Setter],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [Function: fetch],
        navigator: [Getter],
        crypto: [Getter]
        }
    */
    // console.log(this.username);
    // output: undefined, because when we log the value of this.username to the console inside the coded function, it refers to the global object, which does not have a username property, so this.username is undefined, so it prints undefined to the console
}
coded()


function coded1 () {
    let username = "aashna"
    console.log(this.username);
}
// coded1()

const coded2 = function () {
    let username = "aashna"
    console.log(this.username);
}
// coded2()

// arrow function does not have its own this value, it inherits the this value from the enclosing scope, so in this case, it inherits the this value from the global scope, which is an empty object in nodejs, so this.username is undefined, so it prints undefined to the console
// here remove 'function' and after () add =>
const coded3 = () => {
    let username = "aashna"
    // console.log(this.username); // output: undefined, because when we log the value of this.username to the console inside the coded3 arrow function, it inherits the this value from the enclosing scope, which is the global scope in this case, and since the global scope does not have a username property, this.username is undefined, so it prints undefined to the console
    console.log(this); // output: {} , because when we log the value of this to the console inside the coded3 arrow function, it inherits the this value from the enclosing scope, which is the global scope in this case, and since in nodejs, the global object is not the same as the this value in the global scope, it shows us an empty object in the console when we log this in the global scope in nodejs
}
// coded3()


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const addTwo1 = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo1(3, 4)) // 7


// implicit return, removing return and {} for single line code
// removing return and {} for single line code
const addTwo2 = (num1, num2) =>  num1 + num2
// console.log(addTwo2(3, 4)) // 7

// wrapping in parenthesis
const addTwo3 = (num1, num2) => ( num1 + num2 )
// console.log(addTwo3(3, 4)) // 7

// returning an object, we have to wrap the object in parenthesis, because otherwise it will be treated as a block of code, so we have to wrap it in parenthesis to tell the JavaScript engine that it is an object literal and not a block of code, so it will return the object instead of treating it as a block of code
const addTwo4 = (num1, num2) => ({username: "aashna"})
// console.log(addTwo4(3, 4)) // { username: 'aashna' }, because when we call the addTwo4 function with any arguments, it ignores the arguments and returns the object { username: "aashna" } to the caller, and then we log the returned value to the console, so it shows us the value of the returned object, which is { username: "aashna" }, so it prints { username: 'aashna' } to the console




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const myArray = [2, 5, 3, 7, 8]
// for loop
// myArray.forEach()