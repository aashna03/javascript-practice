const user = {
    username: "aashna",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    // return is not necessary, because if we don't return anything then it will return this by default, which is the object created by the new keyword. But if we return something else then it will return that instead of this. So it is better to not return anything from the constructor function, and let it return this by default.
    // return this
    // console.log(this);
}
// console.log(this)

const userOne = new User("aashna", 12, true)
// if new is not then it will overwrite the previous value
// new keyword creates an empty object, and sets this to that object, and returns that object at the end of the function. So we can also return this at the end of the function, but it is not necessary, because it will be returned by default.
const userTwo = new User("aashna6", 11, false)
console.log(userOne);
console.log(userOne.constructor);
console.log("------------------");
console.log(userTwo);