// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}
// console.log(element); // ReferenceError: element is not defined, because element is declared with const, which has block scope, so it is only accessible within the block in which it is declared, and since we are trying to access it outside the block, it throws a ReferenceError saying that element is not defined




// nested for loop
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
}


// array loop
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}
// console.log(myArray[3]); // undefined, because myArray has only 3 elements with indices 0, 1, and 2, so when we try to access the element at index 3, it does not exist in the array, so it returns undefined, which is printed to the console by the console.log() statement that tries to access myArray[3], so it shows us undefined in the console



// break and continue statements

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);    
}



// ==============================================================
// while loop


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    //console.log(`Value is ${myArray2[arr]}`);
    arr = arr + 1
}

let score = 9

do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10)

console.log(score); // 12, because when we execute the do-while loop, it first executes the code inside the do block, which prints Score is 11 to the console, and then it increments the value of score by 1, so score becomes 12, and then it checks the condition in the while statement, which is score <= 10, and since score is now 12, which is not less than or equal to 10, it does not execute the code inside the do block again, and it exits the loop, so when we log the value of score to the console after the loop, it shows us the value of score, which is 12, so it prints 12 to the console
