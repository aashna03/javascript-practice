// Dates

let myDate = new Date()
// console.log(myDate.toString()); // it returns a string representation of the date, it does not change the original date, because dates are mutable in JavaScript // output: "Sat Jan 14 2023 17:30:00 GMT+0530 (India Standard Time)"
// console.log(myDate.toDateString()); // it returns a string representation of the date, it does not change the original date, because dates are mutable in JavaScript // output: "Sat Jan 14 2023"
// console.log(myDate.toLocaleString()); // it returns a string with a language-sensitive representation of the date, it takes a parameter, the locale, it formats the date according to the locale, if the locale is not provided, it uses the default locale of the environment // output: "14/01/2023, 5:30:00 PM"
// console.log(typeof myDate); // it is an object, because it is created using Date constructor, it is not a primitive date

// let myCreatedDate = new Date(2023, 0, 23) // it creates a date object with the specified year, month and day, the month is 0-indexed, so 0 is January, 1 is February and so on, it does not change the original date, because dates are mutable in JavaScript
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // it creates a date object with the specified year, month, day, hour and minute, the month is 0-indexed, so 0 is January, 1 is February and so on, it does not change the original date, because dates are mutable in JavaScript
// let myCreatedDate = new Date("2023-01-14") // it creates a date object with the specified date, it does not change the original date, because dates are mutable in JavaScript // output: "Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)" // here 1 is January, because month is 0-indexed
let myCreatedDate = new Date("01-14-2023") // it creates a date object with the specified date, it does not change the original date, because dates are mutable in JavaScript // output: "Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)" // here 1 is January, because month is 0-indexed
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // it returns the number of milliseconds 

console.log(myTimeStamp); // output: 1772036096508 // it is the number of milliseconds since January 1, 1970 00:00:00 UTC, it does not change the original date, because dates are mutable in JavaScript
console.log(myCreatedDate.getTime()); // output: 1673701800000, it returns the number of milliseconds 
console.log(Math.floor(Date.now()/1000)); // output: 1772036096, it returns the number of seconds since January 1, 1970 00:00:00 UTC, it does not change the original date, because dates are mutable in JavaScript

let newDate = new Date()
console.log("Current date and time: " + newDate.toLocaleString()); // output : 25/2/2026, 9:42:40 pm // it returns a string with a language-sensitive representation of the date, it takes a parameter, the locale, it formats the date according to the locale, if the locale is not provided, it uses the default locale of the environment // output: "14/01/2023, 5:30:00 PM"
console.log(newDate); // output: 2026-02-25T16:12:40.531Z, it is the current date and time in ISO format, it does not change the original date, because dates are mutable in JavaScript
console.log(newDate.getMonth() + 1); // output: 2, it returns the month of the date, it is 0-indexed, so 0 is January, 1 is February and so on, it does not change the original date, because dates are mutable in JavaScript
console.log(newDate.getDay()); // output: 3, it returns the day of the week for the date, it is 0-indexed, so 0 is Sunday, 1 is Monday and so on, it does not change the original date, because dates are mutable in JavaScript

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    // press ctrl + space to see the options for the date formatting
}))

// output: "Wednesday", it returns the day of the week for the date in long format, it does not change the original date, because dates are mutable in JavaScript