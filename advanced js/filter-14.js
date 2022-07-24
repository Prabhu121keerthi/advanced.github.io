/*
const arr = [5, 1, 3, 2, 6];


function isOdd(x) {
  return x % 2;
}

const output = arr.filter(isOdd);

console.log(output);
*/

const users = [
  {firstName: "Akshay", lastName: "Saini", age: 26},
  {firstName: "donald", lastName: "trump", age: 75},
  {firstName: "elon", lastName: "musk", age: 50},
  {firstName: "deepika", lastName: "padukone", age: 26}
];

const result = users.filter(x => x.age < 30)
.map(x => x.firstName);

console.log(result);

