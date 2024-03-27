
//PRIMITIVE
//7 TYPES: String,number, boolean,null,undefined,symbol,BigInt.
const isLoggedIn = false
const outsideTemp= null
let userEmail;
const id = Symbol('123');
const anotherId= Symbol('123')
console.log(id === anotherId); 
//Refrence type(non-primitive)
//Arrays,objects,functions
 const heros = ["shaktiman","naagraj","doga"];
 let myObj = {
    name:"sanjana",
    age:22,
 }
 const myFunc = function(){
    console.log("HelloWorld");
 }
 console.log(typeof anotherId);
 //datatypes of null is 'object'.