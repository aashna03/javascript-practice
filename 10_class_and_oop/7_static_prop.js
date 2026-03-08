
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static keyword is used to define a static method, which is a method that belongs to the class itself, and not to the instances of the class. So we can call this method on the class itself, without creating an instance of the class. So we can call this method as User.createId() instead of creating an instance of the User class and then calling the method on that instance. Static methods are often used for utility functions, or for functions that do not require access to the instance properties of the class.
        return `123`
    }
}

const aashna = new User("aashna")
// console.log(aashna.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
