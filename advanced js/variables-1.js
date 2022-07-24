/*
//var keyword
// Initialized outside of function or block

var user = "John Doe";
function logName() {
  console.log(user)
};
    
logName();


function logName() {
  // Initialized within a function or block
  var name = "John Doe";
  var id = 1;
  console.log(name)
};
    
function logId() {
  //console.log(id)
}
    
logId();

//var is not block scope
var firstName = "John";
  
function checkLastName() {
    var lastName = "Doe";
    console.log(lastName); // "Doe"
    console.log(firstName); // "John"
}
  
checkLastName();
//console.log(lastName);

*/


//let keyword
let firstName = "John";
let lastName = "Doe";

let someBool = true;
if(someBool){
    let firstName = "Jane";
    console.log(firstName);
}
  
console.log(firstName);


let emp = "anusha";
//let emp = "pallavi";

let employee = "ravi";
employee = "kiran";

console.log(emp);
console.log(employee);




//const keyword
const name = "John";
const name = "Jane";