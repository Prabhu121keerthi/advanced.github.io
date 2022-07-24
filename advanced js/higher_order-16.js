const radius = [3, 1, 2, 4];


const area = function(radius) {
  return Math.PI * radius * radius;
};

const circumference = function(radius) {
  return 2 * Math.PI * radius;
};

const diameter = function(radius) {
  return 2 * radius;
}


const calc = function(radius, logic) {
  const output = [];
  for(let i = 0; i<radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calc(radius, area));
console.log(calc(radius, circumference));
console.log(calc(radius, diameter));
