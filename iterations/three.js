// const coding =["js","ruby","java","python","cpp"]

// coding.forEach( (item)=>{
//    console.log(item);
// })

// const myCoding =[
//    {
//       languageName:"javascript",
//       languageFileName:"js"
//    },
//    {
//       languageName:"java",
//       languageFileName:"java"
//    },
//    {
//       languageName:"python",
//       languageFileName:"py"
//    }, 
// ]
// myCoding.forEach((item)=>{
//    console.log(item.languageName);
// })

//filter and Map
const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums);
//...............OR..................................................
// const newNums =myNums.filter((num)=>{
//    return num>4
// }) 
// console.log(newNums);
//...............OR..............................................
const newNums =[]
myNums.forEach((num)=>{
   if(num>4){
      newNums.push(num)
   }
})
console.log(newNums);

