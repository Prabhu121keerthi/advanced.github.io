//length
let sentence = "I love Programiz.";

let len = sentence.length;

console.log(len);

//toLowercase
const message = "JAVASCRIPT IS FUN";

const lowerMessage = message.toLowerCase();
console.log(lowerMessage);

//toUppercase
const msg = "javascript is fun";

const upperMessage = msg.toUpperCase();
console.log(upperMessage);

//includes
const str = "JavaScript is fun";

let result = str.includes("Java");
console.log(result);

//stratWith
let res = str.startsWith("Java");
console.log(res);    

res = str.startsWith("Script");

console.log(result);   

//endswith
let check = str.endsWith("to Carpet.");
console.log(check); 

//search
let txt= "I love JavaScript.";

let regExp = /[A-Z]/;

let indexReg = txt.search(regExp);

console.log(indexReg);

//match
const exp = /programming/;

let resl = txt.match(exp);
console.log(resl);


//indexof
const index = txt.indexOf("va");
console.log('index: ' + index); 

//lastindexof
var substr = "g";

var ans = txt.lastIndexOf(substr);

console.log(ans);

//replace
let answer = message.replace('a', 'c');
console.log(answer);

//trim
const msg1 = "   JAVASCRIPT IS FUN    ";

const newMessage = msg1.trim();
console.log(newMessage);

//concat
let emptyString = "";

let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString);

//split
const mes2 = "JavaScript::is::fun";

let res2 = mes2.split("::");
console.log(result);

//repeat
const holiday = "Happy holiday!";

const res3 = holiday.repeat(3);

console.log(res3);

//slice
let res4 = message.slice(0, 10);
console.log(result);

//substring
let resul = message.substring(0, 10);
console.log(resul);
