class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email=value
    }
    get password(){
        return `${this._password}deepali`
    }
    set password(value){
        this._password=value
    }
}
const deepali = new User("deepali@h.ai","abc")
console.log(deepali.email);