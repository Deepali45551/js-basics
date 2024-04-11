//var c=300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER",a);//10
    //var c=30
}
//console.log(a);//error if a=300 not declared
//console.log(a);//300
//console.log(b);//error
//console.log(c);//30

function one() {
    const username = "deepali"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()//deepali
}
//one()

if (true) {
    const username = "deepali"
    if (username === "deepali") {
        const website = " youtube "
        // console.log(username+website);//deepaliyoutube
    }
    //console.log(website);//error
}
//console.log(username);error

//********************interesting ************
console.log(addone(5))//6 //function declare
function addone(num) {
    return num + 1;
}
//addTwo(5)//error
const addTwo = function (num) {   //function declare and hold
    return num + 2
}








