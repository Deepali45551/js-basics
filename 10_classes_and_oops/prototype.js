let myName = "deepali     "
let mychannel = "chai    "
//console.log(myName.trueLength);

let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.deepali=function(){
    console.log(`Deepali is  present in all objects`)
}
Array.prototype.heydeepali=function(){
    console.log(`Deepali says Hello`);
}
//heroPower.deepali()
//myHeroes.deepali()
//myHeroes.heydeepali()
//heroPower.heydeepali() not power code fail

//inheritance

const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=  User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiaurCode   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"deepali".trueLength()
"iceTea".trueLength()