const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// object.create -> factory function
const aashnaagarwal = Object.create(User)
console.log(aashnaagarwal.email);