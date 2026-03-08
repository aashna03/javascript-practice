function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // this will not work because this inside SetUsername will not refer to the object being created by createUser, instead it will refer to the global object (window in browsers). So we need to use call or apply to set the correct this value.
    // SetUsername.call(username) // this will execute the console log in SetUsername function, but it will not set the username property of the object being created by createUser, because this inside SetUsername will refer to the global object (window in browsers), so it will set the username property of the global object instead of the object being created by createUser, so it will not work as expected. So we need to use call or apply to set the correct this value.
    SetUsername.call(this, username)// give this reference to the SetUsername function, so that it can set the username property of the object being created by createUser, because this inside SetUsername will refer to the object being created by createUser, so it will set the username property of that object, so it will work as expected. So we need to use call or apply to set the correct this value.
   
    this.email = email
    this.password = password
}

const aashna = new createUser("aashna", "aashna@fb.com", "123")
console.log(aashna);