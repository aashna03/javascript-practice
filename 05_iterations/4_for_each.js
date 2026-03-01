const coding = ["js", "ruby", "java", "python", "cpp"]

// for each structure:
// array_name.forEach( function (iterator){for_body_statements})

// coding.forEach( function (val){
//     console.log(val);
// } )


// arrow function variation () => {}
// coding.forEach( (item) => {
//     console.log(item);
// } )


// one more variation with named function
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// more parameters in forEach callback function
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// output:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ] 
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]  


// array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item); //  output like this : { languageName: 'javascript', languageFileName: 'js' } 
    // console.log(item.languageName); 
} )