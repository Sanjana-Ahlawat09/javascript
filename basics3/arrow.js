  const user={
    username:"sanjana",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);//here it will give both the context 
    }
  }
//   user.welcomeMessage()
//   user.username="sam"
//   user.welcomeMessage()
//console.log(this);// this will give an empty object
 const addTwo = (num1,num2)=> (num1+num2)
 console.log(addTwo(3,4))
  const addOne = (num1,num2)=>({username:"sanjana"})
  console.log(addOne())