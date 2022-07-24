/*
//condional stmt

//if stmt
if (10 > 5) {
  var outcome = "if block";
}
​
//else if
if (false) {
  var outcome = "if block";
} else if (true) {
  var outcome = "else if block";
} else {
  var outcome = "else block";
}

*/


//loops in js


//for loop
for (let i = 0; i < 9; i++) {
  console.log(i);
}

//for... in...
const capitals = {
  a: "Athens",
  b: "Belgrade",
  c: "Cairo"
};

for (let key in capitals) {
  console.log(key + ": " + capitals[key]);
}

//while loop
var i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

//do while
var i = 1;

do {
  console.log(i);
  i++;
} while (i < 10);


