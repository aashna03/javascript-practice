// for in loop --> for objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



// for of loop --> for arrays
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}



// for of loop --> for maps (non iterable with for in loop)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { // not iteratable like this
    // console.log(key); // prints nothing but no error, because map is not an object, it is a collection of key-value pairs, and it does not have the properties that an object has, so when we try to use a for-in loop to iterate over a map, it does not work because a for-in loop is designed to iterate over the properties of an object, and since a map does not have properties like an object, it does not execute the code inside the for-in loop, so it does not print anything to the console but it also does not throw an error because it is still valid syntax to use a for-in loop with a map, even though it does not do anything in this case
}