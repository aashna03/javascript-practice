const myNums = [1, 2, 3]

// note --> acc = accumulator, currval = current value
//  -- > const var = array_name.reduce(function(acc, currval){return acc + currval}, initialValue)
const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// output : 
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3

// console.log(myTotal);
// output : 6


// arrow function
// -- > const var = array_name.reduce((acc, currval) => acc + currval, initialValue)
const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal1);

// array of objects 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// here item is the whole object
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);