//sort

let city = ["California", "Barcelona", "Paris", "Kathmandu"];

let sortedArray = city.sort();
console.log(sortedArray);

//reverse

let numbers = [1, 2, 3, 4, 5];

let reversedArray = numbers.reverse();

console.log(reversedArray);

//pop

let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
let removedCity = cities.pop();

console.log(cities)         
console.log(removedCity);  

//push
let loc = ["New York", "Madrid", "Kathmandu"];
loc.push("London");

console.log(loc);

//shift
let languages = ["English", "Java", "Python", "JavaScript"];

let first = languages.shift();
console.log(first);
console.log(languages);

//unshift
let language = ["Java", "Python", "C"];

language.unshift("JavaScript");
console.log(language);

//concat
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

//join
let message = ["JavaScript", "is", "fun."];

let joinedMessage = message.join(" ");
console.log(joinedMessage);

//slice
let num = [2, 3, 5, 7, 11, 13, 17];

let newArray = num.slice(3, 6);
console.log(newArray);

//splice
let prime_numbers = [2, 3, 5, 7, 9, 11];

let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

//isArray
let number = [1, 2, 3, 4];
console.log(Array.isArray(number));

let text = "JavaScript";
console.log(Array.isArray(text));

//indexOf

let lang = ["Java", "JavaScript", "Python", "JavaScript"];

let index = lang.indexOf("JavaScript");
console.log(index);

//lastIndexOf
let priceList = [10, 8, 2, 31, 10, 31, 65];

let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex); 

//entries
const alphabets = ["A", "B", "C"];

let iterator = alphabets.entries();

for (let entry of iterator) {
  console.log(entry);
}

//every
function checkAdult(age) {
  return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); 

if (!check) {
  console.log("All members must be at least 18 years of age.")
}

let check1 = ageArray.every(age => age >= 18); 
console.log(check1);

//filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

let evenNumber = numbers.filter(checkEven);
console.log(evenNumber);


//find
let numbr = [1, 3, 4, 9, 8];

function isEven(element) {
  return element % 2 == 0;
}

let evenNum = numbr.find(isEven);
console.log(evenNum);

//findIndex
function isOdd(element) {
  return element % 2 !== 0;
}

let res = [2, 8, 1, 3, 4];


let firstOdd = res.findIndex(isOdd);

console.log(firstOdd);

//includes
let sub = ["JavaScript", "Java", "C"];

let checks = sub.includes("Java");

console.log(checks); 

//some
function isEven(element) {
  return element % 2 === 0;
}

let arr = [1, 3, 2, 5, 4];

console.log(arr.some(isEven));

//forEach
let elem = [1, 3, 4, 9, 8];

function computeSquare(element) {
  console.log(element * element);
}

elem.forEach(computeSquare);

//toString
let items = ["JavaScript", 1, "a", 3];

let itemsString = items.toString();

console.log(itemsString);

//fill
var fruits = ['Apple', 'Banana', 'Grape'];

fruits.fill("Cherry");

console.log(fruits);

