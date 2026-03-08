class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const aashna = new Teacher("aashna", "aashna@teacher.com", "123")

aashna.logMe()
const msaashna = new User("msaashna")

msaashna.logMe()
// msaashna.addCourse() // this will give an error because addCourse is not a method of User class, it is a method of Teacher class, so we cannot call it on an object of User class. So we need to create an object of Teacher class to call the addCourse method.

console.log(aashna instanceof User);