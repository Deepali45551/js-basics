//Array  Object multiple items in single variable, resizeable,mix datatype.
const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktimaan","naagraj","doma"]
const myArr2=new Array(1,2,3,4);
//console.log(myArr[1]);//1
//Array Methods
//myArr.push(6) //[0, 1, 2, 3, 4, 5, 6 ]
//myArr.pop(); //[ 0, 1, 2, 3, 4, 5 ]

//myArr.unshift(9); //[9, 0, 1, 2, 3, 4, 5]
//myArr.shift();// [ 0, 1, 2, 3, 4, 5 ]

//console.log(myArr.includes(9));// false
//console.log(myArr.indexOf(9));// -1

//const newArr=myArr.join();
//console.log(myArr);    //[ 0, 1, 2, 3, 4, 5 ]
//console.log(newArr);    //0,1,2,3,4,5
//console.log(typeof newArr);   // string

//slice , splice
//console.log("A",myArr);  //A [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3);  //original array manipulate ni hota

console.log(myn1);    //[ 1, 2 ]
console.log("B",myArr); //B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3);// original array manipulate hota hai
console.log("C",myArr);  //C [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]
