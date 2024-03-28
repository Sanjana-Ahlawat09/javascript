//  let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toTimeString());
//  console.log(myDate.toDateString());
//  console.log(myDate.getFullYear());
//  console.log(myDate.getMinutes());
//  console.log(myDate.getTimezoneOffset());
//  console.log(myDate.toLocaleDateString());
//  console.log(typeof myDate)
let myCreatedDate= new Date(2023,1,24,5,6)
console.log(myCreatedDate.toLocaleString());

//***********time************* */
let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000));