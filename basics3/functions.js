
function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("H");
}
// sayMyName()

function addTwoNumbers(num1,num2){//parameters
    //  console.log(num1+num2);
    return num1+num2
}

const result=addTwoNumbers(3,5)//arguments
// console.log("result:",result);

function loginUserName(username){
    if(username===undefined/*!username */){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
// const secresult=loginUserName("sanjana")
// console.log(secresult);
console.log(loginUserName("sanjana"))//if you will not pass any value as argument it will return ubndefined and not null
 
 function calculateCartPrice(val1,val2,...num1){//this will only thake 500and 2000 bcz val1 takes 200 and val2 takes 400
   return num1
 }
 console.log(calculateCartPrice(200,400,500,2000));

 const user={
    username:"sanjana",
    price:199
 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleObject(user)
 handleObject({
    username:"sam",
    price:399
 })
 const myNewArr =[200,400,500]
 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArr));