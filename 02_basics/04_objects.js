const tinderUser1 = new Object()
// console.log(tinderUser1); 
// output: {}, because we have created an empty object using the Object constructor, so it does not have any properties or methods, so it is an empty object

const tinderUser = {}
// console.log(tinderUser);
// output: {}, because we have created an empty object using the object literal syntax, so it does not have any properties or methods, so it is an empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aashna",
            lastname: "agawal"
        }
    }
}

// console.log(regularUser.fullname.userfullname);
// output = { firstname: 'aashna', lastname: 'agawal' }, because fullname is a property of the regularUser object, which is an object itself, and it has a property called userfullname, which is also an object, and it has two properties called firstname and lastname, so regularUser.fullname.userfullname is the correct way to access the value of the userfullname property, which is an object with the properties firstname and lastname
// console.log(regularUser.fullname.userfullname.firstname);
// output: aashna, because fullname is a property of the regularUser object, which is an object itself, and it has a property called userfullname, which is also an object, and it has two properties called firstname and lastname, so regularUser.fullname.userfullname.firstname is the correct way to access the value of the firstname property, which is "aashna"

// concept of option chaining
// console.log(regularUser.fullname?.userfullname?.middlename);
// output: undefined, because fullname is a property of the regularUser object, which is an object itself, and it has a property called userfullname, which is also an object, but it does not have a property called middlename, so regularUser.fullname?.userfullname?.middlename is the correct way to access the value of the middlename property, but since it does not exist, it returns undefined instead of throwing an error, because of the optional chaining operator (?.) which allows us to safely access nested properties without having to check if each level of the property exists or not
// console.log(regularUser.fullname?.playerfullname?.lastname);
// output: undefined, because fullname is a property of the regularUser object, which is an object itself, and it has a property called playerfullname which does not exist, so regularUser.fullname?.playerfullname?.lastname is the correct way to access the value of the lastname property, but since playerfullname does not exist, it returns undefined instead of throwing an error, because of the optional chaining operator (?.) which allows us to safely access nested properties without having to check if each level of the property exists or not
// console.log(regularUser.fullname.playerfullname.lastname);
// output: Uncaught TypeError: Cannot read properties of undefined (reading 'lastname'), because fullname is a property of the regularUser object, which is an object itself, and it has a property called playerfullname which does not exist, so regularUser.fullname.playerfullname.lastname is the correct way to access the value of the lastname property, but since playerfullname does not exist, it throws an error because we are trying to access a property of an undefined value

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3a = { obj1, obj2 }
// console.log(obj3a);
// output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }, because we have created a new object called obj3a which has two properties called obj1 and obj2, which are the objects that we have created earlier, so obj3a is an object that contains the obj1 and obj2 objects as its properties, so when we log obj3a to the console, it shows us the structure of the obj3a object, which contains the obj1 and obj2 objects as its properties
// made nested objects, but we want to combine the properties of obj1 and obj2 into a single object, so we can use the Object.assign() method or the spread operator to combine the properties of obj1 and obj2 into a single object, so that we can access the properties of obj1 and obj2 directly from the new object, without having to access them through the obj1 and obj2 properties of the new object
const obj3b = Object.assign({}, obj1, obj2, obj4)
// here {} is the target object, which is an empty object, and obj1, obj2 and obj4 are the source objects, which are the objects that we want to combine into the target object, so Object.assign() method copies the properties of obj1, obj2 and obj4 into the target object, so obj3b is an object that contains all the properties of obj1, obj2 and obj4 as its properties, so when we log obj3b to the console, it shows us the structure of the obj3b object, which contains all the properties of obj1, obj2 and obj4 as its properties
// console.log(obj3b);
// output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }, because we have used the Object.assign() method to combine the properties of obj1, obj2 and obj4 into a single object, so obj3b is an object that contains all the properties of obj1, obj2 and obj4, so when we log obj3b to the console, it shows us the structure of the obj3b object, which contains all the properties of obj1, obj2 and obj4 as its properties
// console.log(obj1); // no change
const obj3c = Object.assign(obj1, obj2, obj4)
// console.log(obj3c);
// output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }, because we have used the Object.assign() method to combine the properties of obj1, obj2 and obj4 into a single object, so obj3c is an object that contains all the properties of obj1, obj2 and obj4, so when we log obj3c to the console, it shows us the structure of the obj3c object, which contains all the properties of obj1, obj2 and obj4 as its properties
// console.log(obj1)
// output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }, because we have used the Object.assign() method to combine the properties of obj1, obj2 and obj4 into a single object, so obj3c is an object that contains all the properties of obj1, obj2 and obj4, so when we log obj3c to the console, it shows us the structure of the obj3c object, which contains all the properties of obj1, obj2 and obj4 as its properties, but since we have used obj1 as the target object in the Object.assign() method, it also modifies the original obj1 object by adding the properties of obj2 and obj4 to it, so when we log obj1 to the console after using Object.assign() method with obj1 as the target object, it shows us the modified structure of the obj1 object, which now contains all the properties of obj1, obj2 and obj4 as its properties

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }, because we have used the spread operator to combine the properties of obj1 and obj2 into a single object, so obj3 is an object that contains all the properties of obj1 and obj2, so when we log obj3 to the console, it shows us the structure of the obj3 object, which contains all the properties of obj1 and obj2 as its properties, it is a more concise and easier way to combine objects than using Object.assign() method, it is also more performant than Object.assign() method, because it does not have the overhead of calling a method, it is recommended to use spread operator to combine objects in JavaScript, unless we need to combine objects with a specific prototype, in that case we can use Object.assign() method.

// array of objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // array of keys
// output: [ 'id', 'name', 'isLoggedIn' ], because Object.keys() method returns an array of a given object's own enumerable property names, so it returns an array of the keys of the tinderUser object, which are "id", "name" and "isLoggedIn", so when we log Object.keys(tinderUser) to the console, it shows us the keys of the tinderUser object in the form of an array
// console.log(Object.values(tinderUser)); // array of values
// output: [ '123abc', 'Sammy', false ], because Object.values() method returns an array of a given object's own enumerable property values, so it returns an array of the values of the tinderUser object, which are "123abc", "Sammy" and false, so when we log Object.values(tinderUser) to the console, it shows us the values of the tinderUser object in the form of an array
// console.log(Object.entries(tinderUser)); 
// output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ], because Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, so it returns an array of arrays, where each inner array contains the key and value of each property of the object, so when we log Object.entries(tinderUser) to the console, it shows us the structure of the tinderUser object in the form of an array of arrays, where each inner array contains the key and value of each property of the tinderUser object
// array of arrays, where each inner array contains the key and value of each property of the tinderUser object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// output: true, because hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it), so when we log tinderUser.hasOwnProperty('isLoggedIn') to the console, it checks if the tinderUser object has the property 'isLoggedIn' as its own property, and since it does, it returns true, so it prints true to the console



// ==========================================================
// object destructuring 

const course = {
    coursename: "js tutorial",
    price: "999",
    courseInstructor: "aashna"
}

// course.courseInstructor
// can be accessed like this, but we can also use object destructuring to access the properties of the course object in a more concise and easier way, so we can use object destructuring to extract the values of the properties of the course object and assign them to variables, so that we can access the values of the properties directly from the variables, without having to access them through the course object
// curly braces {} used for object destructuring, it is a syntax that allows us to extract values from objects and assign them to variables in a more concise and easier way, so we can use object destructuring to extract the values of the properties of the course object and assign them to variables, so that we can access the values of the properties directly from the variables, without having to access them through the course object
const {coursename} = course
// console.log(coursename);


const {courseInstructor: instructor} = course
// console.log(courseInstructor); 
// output: Uncaught ReferenceError: courseInstructor is not defined, because we have used object destructuring to extract the value of the courseInstructor property from the course object and assign it to a new variable called instructor, so when we log courseInstructor to the console, it throws an error because courseInstructor is not defined in the current scope, it is only defined as a property of the course object, so we cannot access it directly, we can only access it through the instructor variable that we have created using object destructuring
// console.log(instructor);
// output: aashna, because we have used object destructuring to extract the value of the courseInstructor property from the course object and assign it to a new variable called instructor, so when we log instructor to the console, it shows us the value of the courseInstructor property, which is "aashna", so it prints "aashna" to the console

// {
//     "name": "aashna",
//     "coursename": "js tutorial",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]