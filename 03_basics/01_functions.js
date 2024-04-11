function myname() {
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
  console.log("A");
  console.log("L");
  console.log("I");
}
//myname()

//function addNumbers(num1,num2)
//{
// console.log( num1+num2);
//}

function addNumbers(num1, num2) {
  //let result=num1+num2
  //return result
  return num1 + num2
}
//addNumbers(2,"3");//23
const result = addNumbers(2, 3)
//console.log("Result:",result);

function loginUserMessage(username) {
  if (username === undefined) {
    //        console.log("Please enter a username");//Please enter a username
  }
  return `${username}just logged in`
}
//console.log(loginUserMessage("deepali"))//deepalijust logged in
//console.log(loginUserMessage())//undefinedjust logged in

function calculateCartPrice(...num1) {
  return num1;
}
//console.log(calculateCartPrice(200,300,500,2000));//[ 200, 300, 500, 2000 ]

const user = {
  username: "hitesh",
  price: 199
}
function handleObject(anyobject) {
  //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//Username is hitesh and price is 199
}
//handleObject(user)
//handleObject({
//username:"sam",
// price:300
//})
const myArr = [200, 300, 100]
function returnSecondValue(getArray) {
  return getArray[1]
}
//console.log(returnSecondValue(myArr));//300
console.log(returnSecondValue([200, 300, 100]));//300