// function one(){
//     const username="sanjana"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);children class can access parent class members but parent class cannot access child class functions.

//     two()
// }

// one()
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if(true){
    const username ="sanjana"
    if(username==="sanjana"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);

}
// console.log(username);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))//we can put this here and this will work without any error and can execute it before its declaration.
function addone(num){    
return num+1
}
console.log(addTwo(5))//this will give error bcz we have declared a function in variable , we have to execute it after function.we cannot execute before its declaration.
const addTwo=function(num){
    return num+2
}
