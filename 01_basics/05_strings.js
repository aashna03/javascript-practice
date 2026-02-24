const name = "aashna"
const repoCount = 50

// console.log(name + repoCount + " Value"); // donot use this method for string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // use backticks for string interpolation, it is more readable and easier to use

const gameName = new String('aashna-a6-com') //typeof gameName is object, because it is created using String constructor, it is not a primitive string

// console.log(gameName[0]); // it is possible to access characters of a string using index, but it is not possible to change the characters of a string using index, because strings are immutable in JavaScript // gameName[0] = 'a' // it is key-value pair, where key is the index and value is the character at that index
// console.log(gameName.__proto__); // it is the prototype of the string object, it contains all the methods that can be used on a string


// console.log(gameName.length); // it is a property of the string object, it returns the length of the string, it is not a method, so we donot use parentheses after length
// console.log(gameName.toUpperCase()); // it returns a new string with all the characters in uppercase, it does not change the original string, because strings are immutable in JavaScript
console.log(gameName.charAt(2)); // it returns the character at the specified index, if the index is out of range, it returns an empty string
console.log(gameName.indexOf('s')); // it returns the index of the first occurrence of the specified value, if it is not found, it returns -1

const newString = gameName.substring(0, 4) // it returns a new string that is a subset of the original string, it takes two parameters, the starting index and the ending index, it does not include the character at the ending index, if the ending index is not provided, it returns the substring from the starting index to the end of the string
// if negative index is provided, it is treated as 0, so gameName.substring(-8, 4) is same as gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // it returns a new string that is a subset of the original string, it takes two parameters, the starting index and the ending index, it does not include the character at the ending index, if the ending index is not provided, it returns the substring from the starting index to the end of the string, if the starting index is negative, it counts from the end of the string, if the ending index is negative, it counts from the end of the string
console.log(anotherString);

const newStringOne = "   aashna    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it returns a new string with the whitespace removed from both ends of the original string, it does not change the original string, because strings are immutable in JavaScript

const url = "https://aashna.com/aashna%20choudhary"

console.log(url.replace('%20', '-')) // it returns a new string with the specified value replaced by another value, it takes two parameters, the value to be replaced and the value to replace with, it does not change the original string, because strings are immutable in JavaScript

console.log(url.includes('piddi')) // it returns true if the specified value is found in the string, it returns false if the specified value is not found in the string, it is case sensitive

console.log(gameName.split('-')); // it returns an array of substrings, it takes a parameter, the separator, it splits the string into an array of substrings based on the separator, if the separator is not provided, it returns an array with the original string as the only element
// output: [ 'aashna', 'a6', 'com' ]