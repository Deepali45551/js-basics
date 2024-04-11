//Dates
let myDate = new Date()
//console.log(myDate.toString());// Thu Apr 04 2024 08:23:01 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());// Thu Apr 04 2024
//console.log(myDate.toISOString()); // 2024-04-04T08:23:01.102Z
//console.log(myDate.toLocaleDateString());// 4/4/2024
//console.log(myDate.toLocaleString());//4/4/2024, 8:23:01 AM
//console.log(myDate.toJSON());//2024-04-04T08:23:01.102Z
//console.log(typeof myDate);// object

//let myCreatedDate=new Date(2023,0,29)
//console.log(myCreatedDate.toDateString()) //Sun Jan 29 2023
//let myCreatedDate=new Date(2023,0,29,5,4) //1/29/2023, 5:04:00 AM
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate=new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());//millisecond
//console.log(Math.floor(Date.now()/1000));//seconds

let newDate = new Date()
//console.log(newDate);//2024-04-04T08:46:22.710Z
//console.log(newDate.getMonth());//3
//console.log(newDate.getDay())//4

newDate.toLocaleString('default',
    {
        weekday: "long",
    })