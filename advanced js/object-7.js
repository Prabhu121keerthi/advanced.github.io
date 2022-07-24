/*

//Objects

var user = {
  firstName: "Keerthi",
  lastName: "Prabhu",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true
};

console.log(user.firstName);

console.log(user.loginCount);

user.loginCount = 40;

console.log(user.loginCount);

console.table(user);

*/

/*

//Object prototypes - adding properties & methods

function Person () {
  this.name = 'John',
  this.age = 23
}

const person1 = new Person();
const person2 = new Person();


Person.prototype.gender = 'male';


console.log(Person.prototype);

console.log(person1.gender);
console.log(person2.gender);



function Person () {
  this.name = 'John',
  this.age = 23
}


const user1 = new Person();
const user2 = new Person();


Person.prototype.greet = function() {
  console.log('hello' + ' ' +  this.name);
}

user1.greet(); 
user2.greet(); 

*/

/*
//Abstraction

function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalary = baseSalary;

let monthlyBonus = 1000;

let calculateFinalSalary = function() {
  let finalSalary = baseSalary + monthlyBonus;
  console.log('Final Salary: ' + finalSalary);
}

this.getEmpDetails = function() {
  console.log('Name:'+ this.name + '  Age:' + this.age);
  calculateFinalSalary();
}

}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();
*/

/*
//Encapsulation

class Employee{

  setEmpDetails(name, id, phoneNo) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
  }

  getEmpName() {
    return this.name;
  }

  getEmpId(){
    return this.id;
  }

  getPhoneNo(){
    return this.phoneNo;
  }
}

let emp1 = new Employee();
emp1.setEmpDetails('John', 101, 9900125422);

console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getPhoneNo());
*/

/*
//inheritance

class Car{
  setName(name) {
    this.name = name;
  }

  startEngine(){
    console.log('Engine started for '+ this.name);
  }

  stopEngine(){
    console.log('Engine stopped for '+ this.name);
  }
}

class Toyota extends Car{
  topSpeed(speed){
    console.log('Top speed for '+ this.name + ' is ' + speed);
  }
}

let myCar = new Toyota();

myCar.setName('Audi');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);
*/


//Polymorphism

class Animal{
  constructor(name){
    this.name = name;
  }

  eats() {
    console.log(this.name + " eats food");
  }
}

class Alligator extends Animal{

  eats() {
    super.eats();
    console.log(this.name + ' eats fishes');
  }
}

let murphy = new Alligator('Murphy');
murphy.eats();