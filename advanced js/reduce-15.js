const arr = [5, 1, 3, 2, 6];


const users = [
  {firstName: "Akshay", lastName: "Saini", age: 26},
  {firstName: "donald", lastName: "trump", age: 75},
  {firstName: "elon", lastName: "musk", age: 50},
  {firstName: "deepika", lastName: "padukone", age: 26}
];


const result = arr.reduce((acc, cur) =>{
  acc = acc + cur;
  return acc;
},0);

console.log(result);

const maximum = arr.reduce((max, cur) => {
  if(cur > max) {
    max = cur;
  }
  return max;
},0);

console.log(maximum);


const output = users.reduce((acc,cur) => {
  if(acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age];
  }
  else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(output);
