  //if
//   const isUserLoggedIn = true
//   const temperature = 41
//    if(temperature ===40){
//     console.log("less than 50");
//    }else{
//     console.log("temperature is greater than 50");
//    }
//    console.log("executed");
//<,>,<=,>=,==,!=,===,!==

// const score = 200
// if(score>100){
//   let power="fly"
//   console.log(`user power:${power}`);//this will only execute here bcz it is within scope

// }
// console.log(`user power:${power}`);//it will not work here bcz it is outside scope.
//  const balance = 1000
// if(balance>500) console.log("test"),console.log("test2");   // we should not use this syntax bcz it is not readable
// if(balance <500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else {
//   console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard&& 2==3){
    console.log("allow to buy course");
}
if(loggedInFromGoggle || loggedInFromEmail){
    console.log("user logged in");
}