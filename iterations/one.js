//  //for
//  for (let index = 0; index <  10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
    
//  }

//  for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value:${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner loop value ${j} and outer loop ${i}`);
//         console.log(i+'*'+j+'='+i*j);
//     }
    
//  }

// let myArray =["flash","batman","superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//BREAK AND CONTINUE
// for (let index = 0; index < 20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         // break;
//         continue;
//     }
//     console.log(`value of i is ${index}`);
    
//}

//WHILE AND DO WHILE

let index =0
while(index<=10){
    console.log(`value of index is ${index}`);
    index=index+2
}

let score = 1
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10);