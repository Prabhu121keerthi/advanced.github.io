
/*
//variable hoisting

//a = 5;
console.log(a);
var a; 

console.log(a);
var a = 5;


var a = 4;

function greet() {
    b = 'hello';
    console.log(b); 
    var b;
}

greet(); 
console.log(b);

a = 5;
console.log(a);
let a; 

*/

//function hoisting

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

// program to print the text
greet1();

let greet1 = function() {
    console.log('Hi, there.');
}