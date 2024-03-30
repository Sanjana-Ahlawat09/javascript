// //singleton

// //object literals

// const mySym = Symbol("key1")

// const JSuser={
//     name:"sanjana",
//     age:20,
//     branch:"IT",
//     "fullname":"sanjana ahlawat",
//     [mySym]:"mykey1",
// } 
// // console.log(JSuser.age);
// // console.log(JSuser["age"]);
// // console.log(JSuser["fullname"]);
// // console.log( JSuser[mySym]);
// // JSuser.age=24
// // Object.freeze(JSuser);
// // JSuser.age=65
// // console.log(JSuser);

// JSuser.greeting=function(){
//     console.log("hello JS users");
// }
// console.log(JSuser.greeting());

// JSuser.greetingtwo=function(){
//     console.log(`hello js user,${this.name}`);
// }
// console.log(JSuser.greeting());
// console.log(JSuser.greetingtwo());

const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="sanjana"
tinderUser.isLoggedin=false
// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
          firstname:"sanjana",
          lastname:"ahlawat",
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3={obj1,obj2}
const obj3 ={5:"e",6:"f"}
const obj4 ={...obj1,...obj2,...obj3}
//const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

const users=[
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]


console.log(users[1].email)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser).length);
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedin'));
