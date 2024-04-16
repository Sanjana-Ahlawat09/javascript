const name = "sanjana"
const repoCount = 50
console.log(`hello my namme is ${name} and my repo count is ${repoCount}`);
const gameName = new String('sanjana');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,5)
console.log(anotherString);

const newStringOne = " Sanjana "
console.log((newStringOne));
console.log(newStringOne.trim());
const url ="https//sanjana.com/sanjana%20chaudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sana'))
console.log(gameName.split);