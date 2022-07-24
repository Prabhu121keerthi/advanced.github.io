// JSON object
const data = {
  "name": "John",
  "age": 22,
  "hobby": {
"reading" : true,
"gaming" : false,
"sport" : "football"
  },
  "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); 
console.log(data["name"]); 

console.log(data.hobby); 

console.log(data.hobby.sport); 
console.log(data.class[1]); 

/*
//converting json to js object
const jsonData = '{ "name": "John", "age": 22 }';

const obj = JSON.parse(jsonData);

console.log(obj.name); 
*/


//converting js object to json
const jsonData = { "name": "John", "age": 22 };

const obj = JSON.stringify(jsonData);


console.log(obj); 