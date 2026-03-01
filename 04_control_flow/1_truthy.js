const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// true, "0", 'false', " ", [], {}, function(){}
// function(){} -> empty function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++    

// false == 0 // true, because when we compare a boolean with a number, the boolean is converted to a number, so false is converted to 0, and then 0 == 0 is true
// false == '' // true, because when we compare a boolean with a string, the boolean is converted to a number, so false is converted to 0, and then 0 == '' is true, because when we compare a number with a string, the string is converted to a number, so '' is converted to 0, and then 0 == 0 is true
// 0 == '' // true, because when we compare a number with a string, the string is converted to a number, so '' is converted to 0, and then 0 == 0 is true

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// Object.keys(emptyObj) this gives array of keys
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10 // output: 5, because 5 is not null or undefined, so it is returned by the nullish coalescing operator
// val1 = null ?? 10 // output: 10, because null is null, so it is not returned by the nullish coalescing operator, and then it checks the next value, which is 10, and since 10 is not null or undefined, it is returned by the nullish coalescing operator, so it shows us the value of val1, which is 10, when we log val1 to the console
// val1 = undefined ?? 15 // output: 15, because undefined is undefined, so it is not returned by the nullish coalescing operator, and then it checks the next value, which is 15, and since 15 is not null or undefined, it is returned by the nullish coalescing operator, so it shows us the value of val1, which is 15, when we log val1 to the console
// val1 = null ?? 10 ?? 20 // output: 10, because null is null, so it is not returned by the nullish coalescing operator, and then it checks the next value, which is 10, and since 10 is not null or undefined, it is returned by the nullish coalescing operator, so it shows us the value of val1, which is 10, when we log val1 to the console, and it does not check the next value 20 because it has already found a non-nullish value (10) to return
val1 = undefined ?? null ?? 20 // output: 20, because undefined is undefined, so it is not returned by the nullish coalescing operator, and then it checks the next value, which is null, and since null is null, it is not returned by the nullish coalescing operator, and then it checks the next value, which is 20, and since 20 is not null or undefined, it is returned by the nullish coalescing operator, so it shows us the value of val1, which is 20, when we log val1 to the console

// console.log(val1); 




// Terniary Operator
// condition ? true_statement : false_statement

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")