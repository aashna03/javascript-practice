// let myName = "aashna     "
// let mychannel = "coffee     "

// console.log(myName.trueLength);
// we need to make method truelength

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aashna = function(){
    console.log(`aashna is present in all objects`);
}

Array.prototype.heyaashna = function(){
    console.log(`aashna says hello`);
}

heroPower.aashna() // output: aashna is present in all objects, it is because we have added the method aashna to the Object prototype, and all objects in JavaScript inherit from the Object prototype, so they have access to the methods defined on the Object prototype, but it is not recommended to add methods to the Object prototype, because it can cause conflicts with other libraries or code that also use the same method name, and it can also cause performance issues, because it will be available on all objects, even if they do not need it, so it is better to add methods to specific prototypes like Array.prototype or String.prototype, if we want to add methods that are specific to arrays or strings.
myHeros.aashna() // output: aashna is present in all objects, it is because we have added the method aashna to the Object prototype, and all arrays in JavaScript inherit from the Object prototype, so they have access to the methods defined on the Object prototype, but it is not recommended to add methods to the Object prototype, because it can cause conflicts with other libraries or code that also use the same method name, and it can also cause performance issues, because it will be available on all objects, even if they do not need it, so it is better to add methods to specific prototypes like Array.prototype or String.prototype, if we want to add methods that are specific to arrays or strings.
myHeros.heyaashna() // output: aashna says hello, it is because we have added the method heyaashna to the Array prototype, and all arrays in JavaScript inherit from the Array prototype, so they have access to the methods defined on the Array prototype, but it is not recommended to add methods to the Array prototype, because it can cause conflicts with other libraries or code that also use the same method name, and it can also cause performance issues, because it will be available on all arrays, even if they do not need it, so it is better to add methods to specific prototypes like String.prototype, if we want to add methods that are specific to strings.
// heroPower.heyaashna() // gives error because heroPower is not an array, it is an object, so it does not have access to the heyaashna method, because it is defined on the Array prototype, and heroPower is not an instance of Array, it is an instance of Object, so it does not have access to the methods defined on the Array prototype, but it has access to the methods defined on the Object prototype, because it is an instance of Object

// inheritance

const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JScoding     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// anotherUsername.trueLength()
// "aashna".trueLength()
// "iceTea".trueLength()