const user={
    username:"Deepali",
    price:999,
    welcomeMessage:function(){
       // console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}
//user.welcomeMessage();//Deepali, welcome to website
//user.username="sam"
//user.welcomeMessage();//sam, welcome to website
//console.log(this);//empty object{}

//function chai(){
    //let username="deepali"
  //  console.log(this.username);//undefined function inside this not worked
//}
//chai()

//const chai=function(){
  //  let username="deepali"
   // console.log(this.username);//undefined
//}

//const chai=()=>{
  //    let username="deepali"
    // console.log(this);{}
  //}
  //chai()

//const addTwo=(num1,num2)=>{ //explicit return
  //  return num1+num2 
//}
//const addTwo=(num1, num2) => num1+num2 //Implicit return
//const addTwo=(num1, num2) => (num1+num2)
const addTwo=(num1, num2) => ({username:"deepali)"}) //object return in paranthesis
  //    console.log(addTwo(3,4));//7
  




