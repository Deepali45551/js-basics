function multipleBy5(num){
    return num*5
}
mutipleBy5.power = 2;

console.log(multipleBy5(5));//25
console.log(multipleBy5.power);//2
console.log(multipleBy5.prototype);//{} 


function createUser(username,score){
   this.username=username
   this.score=score
}
createUser.prototypr
