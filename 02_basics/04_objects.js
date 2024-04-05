//const tinderUser=new Object()//Singleton object
const tinderUser={}//non singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }
const regularUser={
    email:"soma@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Deepali",
            lastName:"Katiyar"
        }
    }
}
//console.log(regularUser.fullname);//{ userFullname: { firstName: 'Deepali', lastName: 'Katiyar' } }
//console.log(regularUser.fullname.userFullname.firstName);//Deepali

const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}

//const obj3={obj1,obj2}
//console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
///const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3={...obj1,...obj2}
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users=[
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:1,
        email:"g@gmail.com"
    },
]
users[1].email
//console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }
//console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser));//[ '123abc', 'sammy', false ]
//console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true property available or not

const course={
    coursename:"js",
    price:"333",
    courseInstructor: "deepali"
}
//course.courseInstructor
const {courseInstructor:instructor}=course//destucture
//console.log(courseInstructor);//deepali
console.log(instructor);//deepali

// API FORMAT
//{
  //  "name":"deepali",
   // "coursename":"js",
   // "price":"free"
//}

[
    {},
    {},
]




