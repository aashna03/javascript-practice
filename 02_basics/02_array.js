const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// Output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ], it adds the dc_heros array as a single element to the end of the marvel_heros array, it changes the original marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// output: flash, it accesses the second element of the dc_heros array which is the fourth element of the marvel_heros array, because arrays are mutable in JavaScript

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ], it returns a new array that is the combination of the marvel_heros and dc_heros arrays, it does not change the original marvel_heros and dc_heros arrays, because arrays are mutable in JavaScript

// using spread operator to combine two arrays
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ], it returns a new array that is the combination of the marvel_heros and dc_heros arrays, it does not change the original marvel_heros and dc_heros arrays, because arrays are mutable in JavaScript,
//  it is a more concise and easier way to combine two arrays than using concat() method, it is also more performant than concat() method, because it does not have the overhead of calling a method, it is recommended to use spread operator to combine arrays in JavaScript, unless we need to combine arrays with a specific prototype, in that case we can use concat() method.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ], it returns a new array with all sub-array elements concatenated into it recursively up to the specified depth, if the depth is not specified, it defaults to 1, if the depth is Infinity, it flattens all the nested arrays regardless of their depth, it does not change the original another_array array, because arrays are mutable in JavaScript



console.log(Array.isArray("aashna")); // output: false, it returns true if the value is an array, it returns false if the value is not an array
console.log(Array.from("aashna")) // output: [ 'a', 'a', 's', 'h', 'n', 'a' ], it creates a new array from an array-like or iterable object, it takes a parameter, the array-like or iterable object, it does not change the original string, because strings are immutable in JavaScript
console.log(Array.from({name: "aashna"})) // interesting
// output: [], it creates a new array from an array-like or iterable object, it takes a parameter, the array-like or iterable object, it does not change the original object, because objects are mutable in JavaScript, but in this case the object is not an array-like or iterable object, so it returns an empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));