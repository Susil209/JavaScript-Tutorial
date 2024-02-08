// creating an object

//1. By using string literal

const mySym = Symbol("key1");

const user = {
  name: "Susil",
  "full name": "Susil Kumar Nayak",
  [mySym]: "key1",
  age: 24,
  dob: 1999,
  email: "susil@gmail.com",
  isLoggedIn: false,
  address: {
    city: "BBSR",
    zip: "753302",
  },
  skills: ["HTML", "Css", "JS", "React"],
  isCurrentlyWorking: function (status) {
    console.log(status === "yes" ? "Currently working" : "No, not yet");
  },
};

// console.log(user.isCurrentlyWorking("no"));
console.log(typeof user["age"]); // number
console.log(typeof user.isCurrentlyWorking); // function
console.log(typeof user[mySym]); // string

// To access the properties
console.log(user.age); // 24
console.log(user["age"]); // 24
console.log(user[mySym]); // key1
console.log(user["full name"]);

// modify the object
user.age = 30;
console.log(user.age); //30

const anotherObj = {};
user[anotherObj] = "This key is object anotherObj";

console.log(user);
/*
  {
  name: 'Susil',
  'full name': 'Susil Kumar Nayak',
  age: 30,
  dob: 1999,
  email: 'susil@gmail.com',
  isLoggedIn: false,
  address: { city: 'BBSR', zip: '753302' },
  skills: [ 'HTML', 'Css', 'JS', 'React' ],
  isCurrentlyWorking: [Function: isCurrentlyWorking],
  '[object Object]': 'This key is object anotherObj',
  [Symbol(key1)]: 'key1'
}
*/

let propName = "citizen";
user[propName] = "India";

propName = "religion";
user[propName] = "Hinduism";

console.log(user);

/*
{
  name: 'Susil',
  'full name': 'Susil Kumar Nayak',
  age: 30,
  dob: 1999,
  email: 'susil@gmail.com',
  isLoggedIn: false,
  address: { city: 'BBSR', zip: '753302' },
  skills: [ 'HTML', 'Css', 'JS', 'React' ],
  isCurrentlyWorking: [Function: isCurrentlyWorking],
  '[object Object]': 'This key is object anotherObj',
  citizen: 'India',
  religion: 'Hinduism',
  [Symbol(key1)]: 'key1'
}

*/

// delete a property
const deletedResult = delete user.age;

console.log(deletedResult); // true

//methods and this keyword

user.greetings = function () {
  return `Hi my name is ${this.name}`;
};

console.log(user.greetings("Susil"));
console.log(user);

// 2. creating objects using new keyword

const car = new Object();

car.name = "XVC 10z";
car.model = "CTV";
car.launchedYear = 2022;

console.log(car); // { name: 'XVC 10z', model: 'CTV', launchedYear: 2022 }

// Object nested properties

const nestedObj = {
  id: "009981",
  email: "castexample@gmail.com",
  user: {
    name: "Carry",
    address: {
      city: "SF",
      zip: "998788",
      nominees: [
        {
          nom: "Pop",
          isAvailable: true,
        },
        {
          nom: "Dan",
          isAvailable: false,
        },
      ],
    },
  },
};

console.log(nestedObj);
console.log(nestedObj["user"]["address"]["city"]); // SF



nestedObj["user"]["address"]["nominees"].forEach(n => (
  console.log(n.nom) // Pop Dan
))

