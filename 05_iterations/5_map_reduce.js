const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     ////////// console.log(item);
//     return item
// } )
// console.log(values); // output: undefined, because forEach does not return anything, it is used to execute a provided function once for each array element, and it does not return a new array like map or filter, so when we try to assign the result of forEach to a variable, it will be undefined because forEach does not return anything, it just executes the provided function for each element in the array and does not return any value, so when we try to log the values variable, it will be undefined because that is what forEach returns.

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arrow function with implicit return
const filtered_num1 = myNums.filter( (num) => num > 4)
// console.log(filtered_num1); // output: [ 5, 6, 7, 8, 9, 10 ], because filter() creates a new array with all elements that pass the test implemented by the provided function, so it iterates over each element in the myNums array and checks if it is greater than 4, and if it is, it includes that element in the new array that filter() returns, so the filtered_num variable holds the new array that contains only the elements from myNums that are greater than 4, which are [ 5, 6, 7, 8, 9, 10 ], so when we log filtered_num to the console, it shows us that array.

// arrow function with explicit return
const filtered_num2 = myNums.filter( (num) => {
    return num > 4
} )
// console.log(filtered_num2); // output: [ 5, 6, 7, 8, 9, 10 ], because filter() creates a new array with all elements that pass the test implemented by the provided function, so it iterates over each element in the myNums array and checks if it is greater than 4, and if it is, it includes that element in the new array that filter() returns, so the filtered_num variable holds the new array that contains only the elements from myNums that are greater than 4, which are [ 5, 6, 7, 8, 9, 10 ], so when we log filtered_num to the console, it shows us that array.

// usinga forEach loop to achieve the same result as filter() method with array
const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )
// console.log(newNums); // output: [ 5, 6, 7, 8, 9, 10 ], because forEach() executes a provided function once for each array element, so it iterates over each element in the myNums array and checks if it is greater than 4, and if it is, it pushes that element into the newNums array using the push() method, so after the forEach loop is done executing, the newNums array contains only the elements from myNums that are greater than 4, which are [ 5, 6, 7, 8, 9, 10 ], so when we log newNums to the console, it shows us that array.



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// filter() method with array of objects

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// how we made the userBooks
//   let userBooks = books.filter( () => )
//   let userBooks = books.filter( (iterator) => condition_or_filter)
  let userBooks = books.filter( (bk) => bk.genre === 'History')
// using explicit return
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);

  userBooks = books.filter( (bk) => { 
     bk.publish >= 1995 && bk.genre === "History"
})
// console.log(userBooks); // output: [], because when we use the filter() method with an arrow function that has an explicit return, we need to make sure that we are actually returning a value from the function, and in this case, we are not returning anything from the function, so it returns undefined for each element in the books array, and since undefined is a falsy value, it does not include any of the elements in the new array that filter() returns, so the userBooks variable holds an empty array, which is [], so when we log userBooks to the console, it shows us that empty array.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =======================================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map() does operation on each element of the array and returns a new array with the results, it does not change the original array, because arrays are mutable in JavaScript, so when we use map() method on myNumers array, it iterates over each element in the myNumers array and applies the provided function to each element, and then it returns a new array that contains the results of applying the function to each element in the myNumers array, so when we log the result to the console, it shows us that new array with the results of applying the function to each element in the myNumers array.
// can be used instead of foreach
const filteredNums1 = myNumers.map( (num) => { return num + 10})
// console.log(filteredNums1);

// chaining map and filter methods together
const filteredNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(filteredNums2);

// steps of calculation
// original --> map1 --> map2 --> filter 
// 1       -->  10  -->  11       >= 40  --> false
// 3       -->  30  -->  31       >= 40  --> false
// 4       -->  40  -->  41       >= 40  --> true


