//singleton
//Object.create
//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Deepali",
    "full name": "Deepali Katiyar",
    [mySym]: "myKey1",
    age: 20,
    loaction: "jaipur",
    email: "deepali21@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//console.log(jsUser.email) //deepali21@google.com
//console.log(jsUser["email"])// deepali21@google.com
//console.log(jsUser["full name"]);// Deepali Katiyar
//console.log(jsUser[mySym])//myKey1

jsUser.email = "deepali@chat.com"// freeze value not change to microsoft
//Object.freeze(jsUser)
jsUser.email = "deepali2microsoft.com"
//console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello js USER");
}
jsUser.greetingTwo = function () {
    console.log(`Hello js USER,${this.name}`);
}
//console.log(jsUser.greeting);//[Function (anonymous)] function not execute but refrence
//console.log(jsUser.greeting());//Hello js USER
console.log(jsUser.greetingTwo());// Hello js USER,Deepali