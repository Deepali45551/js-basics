const name = "Deepali"
const repoCount = 50

//console.log(name + repoCount + " Value");//Deepali50 Value

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Deepali-hc-com')

//console.log(gameName[0]);//D
//console.log(gameName.__proto__);//{}


//console.log(gameName.length);//14
//console.log(gameName.toUpperCase());//DEEPALI-HC-COM
//console.log(gameName.charAt(2));// e
//console.log(gameName.indexOf('t'));//-1

const newString = gameName.substring(0, 4)
//console.log(newString);// Deep

const anotherString = gameName.slice(-6, 4)
console.log(anotherString); //error

const newStringOne = "   dipali    "
//console.log(newStringOne);//space dipali
//console.log(newStringOne.trim());//dipali

const url = "https://dipali.com/dipali%20katiyar"

//console.log(url.replace('%20', '-')) //https://dipali.com/dipali-katiyar

//console.log(url.includes('sundar'))//false

//console.log(gameName.split('-'));//[ 'Deepali', 'hc', 'com' ]