const myCourse = "Javascript"

console.log(myCourse + " Programming"); // concat 
console.log(`My course name is ${myCourse}`); // string literals

console.log(myCourse.__proto__); // {}

// string object

const myName = new String("Java") // constructor
// properties
console.log(myName.length); // 4

// methods
console.log(typeof myCourse); //string
console.log(typeof myName); // object

console.log(myName.toUpperCase()); // JAVA
console.log(myName[1]); // v

console.log(myName.charAt(2)); // v
console.log(myName.charCodeAt(2)); // unicode(v) = 118

console.log(myName.concat("Script")); // JavaScript


console.log(myName.indexOf("a")); // 1
console.log(myName.lastIndexOf("a")); // 3

const newStr = "Javascript is a synchronous single threaded programming language"

console.log(newStr.slice(11,16)); // is a  
console.log(newStr.lastIndexOf("e")); // 63
console.log(newStr.slice(-5)); // guage
console.log(newStr.slice(-10, -7)); //g l

console.log(newStr.substring(9,20)); // t is a sync

console.log(newStr.at(20)); // h

console.log(newStr.startsWith("Java")); // false
console.log(newStr.endsWith("language")); // true

console.log(newStr.includes("single")); // true

console.log(newStr.replace("single", "double")); //Javascript is a synchronous double threaded programming language


const str = "   name and game      "
console.log(str.trim()); // name and game

console.log(newStr.split(" "));
/*
[
  'Javascript',
  'is',
  'a',
  'synchronous',
  'single',
  'threaded',
  'programming',
  'language'
]
*/

console.log(newStr.split(" ", 4)); // [ 'Javascript', 'is', 'a', 'synchronous' ]

console.log(newStr.search("single")); // 28