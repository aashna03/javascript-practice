// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // null is converted to 0, so 0 > 0 => false
console.log(null == 0); // null is only equal to undefined, not to any other value => false
console.log(null >= 0); // null is converted to 0, so 0 >= 0 => true

console.log(undefined == 0); // undefined is only equal to null, not to any other value => false
console.log(undefined > 0); // undefined is converted to NaN, and any comparison with NaN is false => false
console.log(undefined < 0); // undefined is converted to NaN, and any comparison with NaN is false => false

// === 

console.log("2" === 2); // === checks for value and type both, so "2" is string and 2 is number => false
console.log("2" !== 2); // !== checks for value and type both, so "2" is string and 2 is number => true