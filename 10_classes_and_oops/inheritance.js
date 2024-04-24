class User{
    constructor(username){
        this.username=username//set username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
    }

    addCourse(){
        console.log(` A new course was added by ${this.username}`);
    }
}
const chai=new Teacher("chai","chai@teacher.com","123");
chai.addCourse();

const masalaChai=new User("masalaChai")
//masalaChai.addCourse()// not access error 
masalaChai.logMe()

//console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);
//console.log(chai === Teacher);//false