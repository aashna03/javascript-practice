// array

const myArr = [0, 1, 2, 3, 4, 5] // it is an array of numbers, it is a collection of values, it is a data structure that can hold multiple values, it is a reference type, it is mutable, it can hold any type of value, it can hold duplicate values, it can hold values in any order, it can be accessed using index, it has a length property that returns the number of elements in the array, it has many methods that can be used to manipulate the array // output: [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof myArr); // output: object, because arrays are objects in JavaScript, they are not a primitive data type, they are a reference type, they are mutable, they can hold any type of value, they can hold duplicate values, they can hold values in any order, they can be accessed using index, they have a length property that returns the number of elements in the array, they have many methods that can be used to manipulate the array
const myHeors = ["shaktiman", "naagraj", 34, true] // it is an array of mixed data types, it can hold any type of value, it is a reference type, it is mutable, it can hold duplicate values, it can hold values in any order, it can be accessed using index, it has a length property that returns the number of elements in the array, it has many methods that can be used to manipulate the array // output: [ 'shaktiman', 'naagraj', 34, true ]
let myArr1 = myArr // it does not create a new array, it creates a reference to the original array, so both myArr and myArr1 point to the same array in memory, so if we change the value of myArr1, it will also change the value of myArr, because they are both pointing to the same array in memory
myArr1.push(6)
console.log(myArr); // output: [ 0, 1, 2, 3, 4, 5, 6 ], because myArr1 is a reference to the original array myArr, so when we push a new value to myArr1, it also changes the original array myArr, because they are both pointing to the same array in memory
console.log(myArr1);


const myArr2 = new Array(1, 2, 3, 4) // it is another way to create an array, it is a constructor function that creates an array object, it takes any number of arguments and creates an array with those arguments as elements, it is a reference type, it is mutable, it can hold any type of value, it can hold duplicate values, it can hold values in any order, it can be accessed using index, it has a length property that returns the number of elements in the array, it has many methods that can be used to manipulate the array // output: [ 1, 2, 3, 4 ]
console.log(typeof myArr2); // output: object, because arrays are objects in JavaScript, they are not a primitive data type, they are a reference type, they are mutable, they can hold any type of value, they can hold duplicate values, they can hold values in any order, they can be accessed using index, they have a length property that returns the number of elements in the array, they have many methods that can be used to manipulate the array
// difference between array literal and array constructor is that array literal is a more concise and easier way to create an array, it is also more performant than array constructor, because it does not have the overhead of calling a constructor function, it is recommended to use array literal to create arrays in JavaScript, unless we need to create an array with a specific length or we need to create an array with a specific prototype, in that case we can use array constructor.



// Array methods

// myArr.push(6) // it adds a new element to the end of the array, it changes the original array, because arrays are mutable in JavaScript
// myArr.push(7)
// myArr.pop() // it removes the last element from the array and returns that element, it changes the original array, because arrays are mutable in JavaScript

// myArr.unshift(9) // output: [ 9, 0, 1, 2, 3, 4, 5 ], it adds a new element to the beginning of the array, it changes the original array, because arrays are mutable in JavaScript
// myArr.shift() // output: [ 0, 1, 2, 3, 4, 5 ], it removes the first element from the array and returns that element, it changes the original array, because arrays are mutable in JavaScript



// console.log(myArr.includes(9)); // output: false, it returns true if the array contains the specified element, it returns false if the array does not contain the specified element, it is case sensitive
// console.log(myArr.indexOf(3)); // output: 3, it returns the index of the first occurrence of the specified element in the array, it returns -1 if the specified element is not found in the array, it is case sensitive
// console.log(myArr.indexOf(9)); // output: -1, it returns the index of the first occurrence of the specified element in the array, it returns -1 if the specified element is not found in the array, it is case sensitive



// const newArr = myArr.join() // output: "0,1,2,3,4,5", it returns a string by concatenating all the elements of the array, it takes a parameter, the separator, it separates the elements of the array in the string with the specified separator, if the separator is not provided, it separates the elements with a comma, it does not change the original array, because arrays are mutable in JavaScript
// // it returns a string by concatenating all the elements of the array, it takes a parameter, the separator, it separates the elements of the array in the string with the specified separator, if the separator is not provided, it separates the elements with a comma, it does not change the original array, because arrays are mutable in JavaScript
// console.log(myArr); // output: [ 0, 1, 2, 3, 4, 5 ], because join() does not change the original array, because arrays are mutable in JavaScript
// console.log( newArr); // output: "0,1,2,3,4,5", it returns a string by concatenating all the elements of the array, it takes a parameter, the separator, it separates the elements of the array in the string with the specified separator, if the separator is not provided, it separates the elements with a comma, it does not change the original array, because arrays are mutable in JavaScript
// console.log(typeof newArr); // output: string, because join() returns a string, it does not change the original array, because arrays are mutable in JavaScript
// console.log(myArr.join("-")); // output: "0-1-2-3-4-5", it returns a string by concatenating all the elements of the array, it takes a parameter, the separator, it separates the elements of the array in the string with the specified separator, if the separator is not provided, it separates the elements with a comma, it does not change the original array, because arrays are mutable in JavaScript



// slice, splice

// console.log("A ", myArr);
// output: [ 0, 1, 2, 3, 4, 5 ], it is the original array before using slice() or splice(), 

// SLICE
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// output: [ 1, 2 ], it returns a new array that is a subset of the original array, it takes two parameters, the starting index and the ending index, it does not include the element at the ending index, if the ending index is not provided, it returns the slice from the starting index to the end of the array, if negative index is provided, it is treated as 0, so myArr.slice(-8, 4) is same as myArr.slice(0, 4), it does not change the original array, because arrays are mutable in JavaScript

// console.log("B ", myArr);
// output: [ 0, 1, 2, 3, 4, 5 ], it is the original array after using slice(), because slice() does not change the original array

// SPLICE
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// output: [ 0, 4, 5 ], it changes the original array by removing the elements from the starting index to the number of elements specified in the second parameter, it returns an array of the removed elements, so myn2 is [ 1, 2, 3 ], because it removes 3 elements starting from index 1, it changes the original array, because arrays are mutable in JavaScript
// console.log(myn2);
// output: [ 1, 2, 3 ], it returns an array of the removed elements, so myn2 is [ 1, 2, 3 ], because it removes 3 elements starting from index 1, it changes the original array, because arrays are mutable in JavaScript