// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
// for of loop --> is used to iterate over the elements of an iterable object, such as an array, a string, a map, a set, etc. It is a simpler and more concise way to iterate over the elements of an iterable object compared to a traditional for loop, because it does not require us to keep track of the index of the current element, and it also does not require us to check the length of the iterable object in each iteration, so it is more efficient and easier to read and write, especially when we only need to access the elements of the iterable object without needing to modify them or access their indices, so it is a good choice for iterating over arrays and other iterable objects when we only need to access their elements without needing to modify them or access their indices
for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps -- remembers order of insertion, it is a collection of key-value pairs where each key is unique and maps to a specific value, it is a reference type, it is mutable, it can hold any type of value as a key or value, it can hold duplicate values but not duplicate keys, it can hold values in any order, it can be accessed using keys, it has a size property that returns the number of key-value pairs in the map, it has many methods that can be used to manipulate the map, such as set(), get(), has(), delete(), clear(), etc. It is often used when we need to store and retrieve data based on unique keys, and when we need to maintain the order of insertion of the key-value pairs in the map, so that we can iterate over them in the same order they were added to the map.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
// output
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for(const key of map) {
    // console.log(key); // output in aray form
}
// output
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// output
// IN :- India
// USA :- United States of America
// Fr :- France


// ==============================================================
// for object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // gives error TypeError: myObject is not iterable // not iteratable like this
//     console.log(key, ':-', value); 
// }

for (const [key, value] of Object.entries(myObject)) { // it is iteratable like this, because Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs, so it converts the object into an array of key-value pairs, and then we can use a for-of loop to iterate over that array of key-value pairs, so it works without giving an error, and it prints the key and value of each property in the object to the console
    // console.log(key, ':-', value); 
}

console.log(Object.entries(myObject)); // output: [ [ 'game1', 'NFS' ], [ 'game2', 'Spiderman' ] ], it returns an array of a given object's own enumerable string-keyed property [key, value] pairs, so it converts the object into an array of key-value pairs, and then we can use a for-of loop to iterate over that array of key-value pairs, so it works without giving an error, and it prints the key and value of each property in the object to the console

// ... to be continued in next file