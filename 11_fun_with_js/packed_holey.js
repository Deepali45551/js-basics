const myArr=[]
%DebugPrint(myArr)

// continuous , Holey
// SMI(small integer)
//Packed element
//Double (float, string, function)

const arrTwo=[1,2,3,4,5,6]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('8')
//PACKED_ELEMENTS

arrTwo[10]=11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[18]);

//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.properties,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js

const arrThree=[1,2,3,4,5]
console.log(arrThree[2]);

//SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED
//Ek bar downgrade hogya fr woh upgrade ni hoga

const arrFour= new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0]='1' //HOLEY_ELEMENTS
arrFour[1]='2' //HOLEY_ELEMENTS
arrFour[2]='3' //HOLEY_ELEMENTS

const arrFive=[]// MORE Optimized
arrFive.push('1')// PACKED_ELEMENTS
arrFive.push('2')// PACKED_ELEMENTS
arrFive.push('3')// PACKED_ELEMENTS

const arrSix=[1,2,3,4,5]
arrSix.push(Infinity);//PACKED_DOUBLE

// for, for-of, forEach