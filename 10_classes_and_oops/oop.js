const user={
    username:"Deepali",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
       // console.log("Got user details from database");
       //  console.log(`Username: ${this.username}`);
       console.log(this); //current context
        }
}
//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);

function User(username,loginCount,isLoggedIn){
   this.username=username ;
   this.loginCount=loginCount;
   this.isLoggedIn=isLoggedIn;
   this.greeting=function(){
    console.log(`Welcome ${this.username}`);
   }
   return this // object pass on
}
const userOne=new User("Deepali",12,true)// use new keyword to remove override
const userTwo=new User("Chai",24,false); //UserTwo override value of userOne
console.log(userOne.constructor);
//console.log(userTwo);




