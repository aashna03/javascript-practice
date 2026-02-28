
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}

// sayMyName
// output: nothing happens, because we have not called the function, we have only referenced it, so it does not execute the code inside the function, it just returns the function definition, so when we log sayMyName to the console, it shows us the function definition of sayMyName, which is the code inside the function, but it does not execute the code inside the function, so it does not print anything to the console
// console.log(sayMyName);
// output: [Function: sayMyName], because when we log sayMyName to the console, it shows us the function definition of sayMyName, which is the code inside the function, but it does not execute the code inside the function, so it does not print anything to the console, it just returns the function definition, so when we log sayMyName to the console, it shows us the function definition of sayMyName, which is the code inside the function, but it does not execute the code inside the function, so it does not print anything to the console
// sayMyName()
// output: A A S H N A, because when we call the function sayMyName(), it executes the code inside the function, so it prints "A", "A", "S", "H", "N" and "A" to the console, each on a new line, because of the console.log() statements inside the function, so it prints "A", "A", "S", "H", "N" and "A" to the console, each on a new line


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers()
// output: NaN, because when we call the function addTwoNumbers() without passing any arguments, it takes the default values of number1 and number2 as undefined, so it tries to add undefined + undefined, which results in NaN (Not a Number), so it prints NaN to the console

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
// output: 8, because when we call the function addTwoNumbers(3, 5), it takes the values of number1 and number2 as 3 and 5 respectively, so it adds 3 + 5, which results in 8, so it returns 8 to the caller, and then we store the returned value in the variable result, so when we log result to the console, it shows us the value of result, which is 8, so it prints 8 to the console
// const result2 = addTwoNumbers(10, "20")
// output: 1020, because when we call the function addTwoNumbers(10, "20"), it takes the values of number1 and number2 as 10 and "20" respectively, so it tries to add 10 + "20", which results in "1020", because when we try to add a number and a string, JavaScript converts the number to a string and then concatenates the two strings, so it converts 10 to "10" and then concatenates "10" + "20", which results in "1020", so it returns "1020" to the caller, and then we store the returned value in the variable result2, so when we log result2 to the console, it shows us the value of result2, which is "1020", so it prints "1020" to the console
// const result3 = addTwoNumbers(33, "World")
// output: 33World, because when we call the function addTwoNumbers(33, "World"), it takes the values of number1 and number2 as 33 and "World" respectively, so it tries to add 33 + "World", which results in "33World", because when we try to add a number and a string, JavaScript converts the number to a string and then concatenates the two strings, so it converts 33 to "33" and then concatenates "33" + "World", which results in "33World", so it returns "33World" to the caller, and then we store the returned value in the variable result3, so when we log result3 to the console, it shows us the value of result3, which is "33World", so it prints "33World" to the console


function loginUserMessage1(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage1());
// output: undefined just logged in, because when we call the function loginUserMessage1() without passing any arguments, it takes the default value of username as undefined, so it tries to return `${undefined} just logged in`, which results in "undefined just logged in", so it returns "undefined just logged in" to the caller, and then we log the returned value to the console, so it shows us the value of the returned string, which is "undefined just logged in", so it prints "undefined just logged in" to the console


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("aashna"))

// ==========================================================

// when we donot know how many arguments we want to pass to a function, we can use rest parameters, so that we can pass any number of arguments to the function, and it will be treated as an array inside the function, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array
// rest parameters are denoted by three dots ... followed by the name of the parameter, so that we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods, so we can use rest parameters to create a function that can take any number of arguments and return them as an array, so that we can access the arguments using array methods

function calculateCartPrice1(...num1){
    return num1
}

// console.log(calculateCartPrice1(200, 400, 500, 2000))
// output: [ 200, 400, 500, 2000 ], because when we call the function calculateCartPrice1(200, 400, 500, 2000), it takes the values of num1 as an array of the arguments passed to the function, so it takes num1 as [200, 400, 500, 2000], so it returns [200, 400, 500, 2000] to the caller, and then we log the returned value to the console, so it shows us the value of the returned array, which is [200, 400, 500, 2000], so it prints [200, 400, 500, 2000] to the console


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// output: [ 500, 2000 ], because when we call the function calculateCartPrice(200, 400, 500, 2000), it takes the values of val1 and val2 as 200 and 400 respectively, and it takes the rest of the arguments as an array of num1, so it takes num1 as [500, 2000], so it returns [500, 2000] to the caller, and then we log the returned value to the console, so it shows us the value of the returned array, which is [500, 2000], so it prints [500, 2000] to the console

const user = {
    username: "aashna",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// output: Username is aashna and price is undefined, because when we call the function handleObject(user), it takes the value of anyobject as the user object, so it takes anyobject as { username: "aashna", prices: 199 }, so it tries to return `Username is ${anyobject.username} and price is ${anyobject.price}`, which results in "Username is aashna and price is undefined", because anyobject.username is "aashna", but anyobject.price is undefined, because there is no property called price in the user object, so it returns "Username is aashna and price is undefined" to the caller, and then we log the returned value to the console, so it shows us the value of the returned string, which is "Username is aashna and price is undefined", so it prints "Username is aashna and price is undefined" to the console
// handleObject({
//     username: "sam",
//     price: 399
// })
// output: Username is sam and price is 399, because when we call the function handleObject({ username: "sam", price: 399 }), it takes the value of anyobject as the object that we have passed as an argument, so it takes anyobject as { username: "sam", price: 399 }, so it tries to return `Username is ${anyobject.username} and price is ${anyobject.price}`, which results in "Username is sam and price is 399", because anyobject.username is "sam" and anyobject.price is 399, so it returns "Username is sam and price is 399" to the caller, and then we log the returned value to the console, so it shows us the value of the returned string, which is "Username is sam and price is 399", so it prints "Username is sam and price is 399" to the console

// ==========================================================

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// output: 400, because when we call the function returnSecondValue(myNewArray), it takes the value of getArray as the myNewArray array, so it takes getArray as [200, 400, 100, 600], so it tries to return getArray[1], which results in 400, because getArray[1] is the second element of the array, which is 400, so it returns 400 to the caller, and then we log the returned value to the console, so it shows us the value of the returned number, which is 400, so it prints 400 to the console
// console.log(returnSecondValue([200, 1400, 500, 1000]));
// output: 1400, because when we call the function returnSecondValue([200, 1400, 500, 1000]), it takes the value of getArray as the array that we have passed as an argument, so it takes getArray as [200, 1400, 500, 1000], so it tries to return getArray[1], which results in 1400, because getArray[1] is the second element of the array, which is 1400, so it returns 1400 to the caller, and then we log the returned value to the console, so it shows us the value of the returned number, which is 1400, so it prints 1400 to the console