class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    // use getter and setter both 
    get password(){
        return `${this._password}aashna` // if we are accessing we get this
        // 
    }

    set password(value){
        this._password = value // in database it is getting stored like this
        // to avoid race condition to avoid stack error that constructor and setter will call each other again and again 
    }
}

const aashna = new User("a6@aashna.ai", "abc")
console.log(aashna.email);