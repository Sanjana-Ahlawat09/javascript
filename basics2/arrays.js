 const myArr =[1,2,3,4,5,6,7 ]
// // console.log(myArr[2]);
// // // myArr.push(9);
// // // myArr.pop(6);
// //  myArr.unshift(9);
// // myArr.shift()
// // console.log(myArr.includes(9)); 
// // let newArr = myArr.join()
// // console.log(newArr);
// // console.log(myArr);
// // console.log(typeof newArr);

// const myn1 = myArr.slice(1,3)//it does not includes the third index
// console.log(myn1);
// const myn11 = myArr.splice(1,3)//it includes 3 index
// console.log(myn11);

const marvel_heros =["thor","ironman","spiderman"]
const dc_heros= ["superman","flash","batman"]
// marvel_heros.push(dc_heros);//it will not merge two arrays it wil create an array within another array.
// console.log(marvel_heros)

// const allHeros=marvel_heros.concat(dc_heros)//push will work on existing array but for using concat we have to create new array.
// console.log(allHeros);

const newAllHeros = [...marvel_heros,...dc_heros]
console.log(newAllHeros); 

console.log(Array.isArray("sanjana"));
console.log(Array.from("sanjana"));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));