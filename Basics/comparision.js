"use strict";

// Comparision Operator

const p = 10 , q = 3

console.log(p==q); // false
console.log(p>q); // true
console.log(p<q); // false
console.log(p>=q); // true
console.log(p<=q); // false
console.log(p!=q); // true

console.log(p === q); // false
console.log(p !== q); // true

// Equality operator (== or !=)
// If the operands have the same type
console.log(1 == 1); // true
console.log("1" == "1"); // true
console.log(true == true); // true
console.log(NaN == NaN); // false

//Comparing strings and String objects

const a = new String("hello");
const b = new String("hello");
const c = "hello";
const d = a;

console.log(a == b); // false
console.log(a == c); // true
console.log(a == d); // true

console.log("------------------------------");

// If one of the operands is null or undefined
console.log(null == 1); // false
console.log(null == 0); // false
console.log(null == null); // true
console.log(null == true); // false
console.log(null == undefined); // true
console.log(null == NaN); // false
console.log(null == "1"); // false
console.log(null == ""); // false
console.log(null == "hello"); // false

// similar with undefined

console.log("------------------------------");

const x = new Number(10);
console.log(x == 10); // true

// comparision of objects
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true


console.log("---------Strict equality------------");
// strict equality(===)

console.log("1"===1);// false
console.log(0===false); // false

console.log(null === undefined); // false
console.log(null === null);//true
console.log(undefined === undefined); // true

console.log(NaN === 3); //false
console.log(3===new Number(3)); // false


console.log("-------LESS/GREATER-------");
// Less than and greater than
console.log(3 > 2); // true
console.log("3" > 2); // true
console.log("3" > "2"); // true

/*
  1.Boolean values true and false are converted to 1 and 0 respectively.
  2.null is converted to 0.
  3.undefined is converted to NaN.
  4.If either value is NaN, the operator returns false
*/

console.log(true < false); //false
console.log(0 > true); // false

console.log(null > 0); //false
console.log(null < true); // true

console.log(undefined > 0); //false
console.log("e43" > true); // false

// Note : This is same for > , < , >= and <=

