// var d = 567

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     var d = 777
// }

// console.log(a); // ReferenceError: a is not defined, because a is declared with let, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block, it throws a ReferenceError saying that a is not defined
// console.log(b); // ReferenceError: b is not defined, because b is declared with const, which also has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block, it throws a ReferenceError saying that b is not defined
// console.log(c); // 30, because c is declared with var, which has function scope, so it is accessible within the function in which it is declared, and since we are trying to access it outside the block but within the same function (which is the global scope in this case), it does not throw an error and instead returns the value of c, which is 30
// console.log(d); // 777, because d is declared with var, which has function scope, so it is accessible within the function in which it is declared, and since we are trying to access it outside the block but within the same function (which is the global scope in this case), it does not throw an error and instead returns the value of d, which is 777, because when we declare a variable with var, it gets hoisted to the top of the function scope, so when we declare var d = 567, it gets hoisted to the top of the global scope, and then when we declare var d = 777 inside the block, it does not create a new variable but instead updates the value of the existing variable d in the global scope to 777, so when we log d to the console, it shows us the updated value of d, which is 777

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // INNER: 10, because when we declare let a = 10 inside the block, it creates a new variable a that is scoped to the block, so when we log a to the console inside the block, it shows us the value of the block-scoped variable a, which is 10, and it does not affect the value of the outer variable a, which is 300
}



// console.log(a); // 300, because when we declare let a = 300 outside the block, it creates a variable a that is scoped to the outer block (which is the global scope in this case), so when we log a to the console outside the block, it shows us the value of the outer variable a, which is 300, and it does not get affected by the inner variable a that is declared inside the block, because they are two different variables with different scopes
// console.log(b); // ReferenceError: b is not defined, because b is declared with const, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block, it throws a ReferenceError saying that b is not defined




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "aashna"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined, because website is declared with const, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block but within the same function (which is the outer function one), it throws a ReferenceError saying that website is not defined
    two()

}

// one() // output: aashna, because when we call the function one(), it executes the code inside the function one, which declares a variable username with the value "aashna", and then it declares a nested function two(), which declares a variable website with the value "youtube", and then it logs the value of username to the console, so it shows us the value of username, which is "aashna", so it prints "aashna" to the console, and then it returns undefined, which is printed to the console by the console.log(one()) statement
// two() // ReferenceError: two is not defined, because two is declared as a nested function inside the function one, so it is only accessible within the function one, and since we are trying to access it outside the function one, it throws a ReferenceError saying that two is not defined



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if (true) {
    const username = "aashna"
    if (username === "aashna") {
        const website = " youtube"
        // console.log(username + website); // aashna youtube, because when we declare const username = "aashna" inside the outer block, it creates a variable username that is scoped to the outer block, so when we declare const website = " youtube" inside the inner block, it creates a variable website that is scoped to the inner block, and since the inner block is nested inside the outer block, it has access to the variables declared in the outer block, so when we log username + website to the console inside the inner block, it shows us the value of username and website concatenated together, which is "aashna youtube", so it prints "aashna youtube" to the console
    }
    // console.log(website); // ReferenceError: website is not defined, because website is declared with const, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block but within the same function (which is the outer block in this case), it throws a ReferenceError saying that website is not defined
}

// console.log(username); // ReferenceError: username is not defined, because username is declared with const, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block, it throws a ReferenceError saying that username is not defined




// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) // output: 6, because when we call the function addone(5), it takes the value of num as 5, so it takes num as 5, and then it tries to return num + 1, which results in 6, because num is 5, so it returns 6 to the caller, and then we log the returned value to the console, so it shows us the value of the returned number, which is 6, so it prints 6 to the console

function addone(num){
    return num + 1
}



// addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization, because addTwo is declared as a function expression using const, so it is not hoisted to the top of the scope like function declarations, and since we are trying to call it before it is initialized, it throws a ReferenceError saying that we cannot access addTwo before initialization
const addTwo = function(num){
    return num + 2
}

