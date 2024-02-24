// OOPS is a programming paradigm

// Object literal

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function (name) {
    console.log(`Hi! I'm ${name}.`);
  },
};
// console.log(person.introduceSelf(person.name[1]));
//console.log(person);

// using Constructor function

const User = function (name, age) {
  this.name = name;
  this.age = age;

  //   this.greet = function () {
  //     console.log(`Hi! ${this.name}.`);
  //   };
};

// [[Prototype]]

User.prototype.greet = function () {
  console.log(`Hi! ${this.name}.`);
};

User.prototype.city = 'London';

// function User(name,age) {
//     this.name = name;
//     this.age = age;

//     this.greet= function() {
//         console.log(`Hi! ${this.name}.`);
//     }
// }

const user1 = new User("Madhav", 23);
const user2 = new User("Salsa", 22);

// console.log(User);
// console.log(user1);
// console.log(user1.greet());
//console.log(user1.constructor); //[Function: User]



// instanceOf
//console.log(user1 instanceof User); // true



// __proto__

const employee = {
    location: "Bangalore",
    industry: "Corporate",
    // __proto__: person
}

// or
// employee.__proto__ = person;

// modern syntax
Object.setPrototypeOf(employee,person)

console.log(employee);