const coding = ["js", "ruby", "python", "java", "cpp"]
//coding.forEach( function(item){
//  console.log(item);//js ruby python java cpp
//})

//coding.forEach((item)=>{
//  console.log(item);//js ruby python java cpp
//})

//function printMe(item){
//  console.log(item); //js ruby python java cpp
//}
//coding.forEach(printMe)

//coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
//})

const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.langName);//javascript java python
})