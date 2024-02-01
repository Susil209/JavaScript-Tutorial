"use strict"

const num = 120
const num1 = new Number(1222)

console.log(typeof num, num); // number 120
console.log(typeof num1, num1); // object [Number: 1222]


// instance methods
console.log(num1.toString()); // string representation
console.log(num1.toString().length); // 4

console.log(num1.toFixed(2)); // 1222.00
console.log(num.toPrecision(4)); // 120.0
console.log(num.toPrecision(2)); // 1.2e+2


const x = 100000000
console.log(x.toLocaleString()); // 100,000,000
console.log(x.toLocaleString('en-IN')); // 10,00,00,000

// properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);


// static methods
console.log(Number.isInteger(x)); // true
console.log(Number.isFinite(x)); // true

const newNum = "1000"
console.log(Number.parseInt(newNum)); // 1000


console.log("-------------Math-----------");

// properties
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);


// methods
console.log(Math.abs(-7711)); // 7711
console.log(Math.floor(12.56)); // 12
console.log(Math.ceil(12.56)); // 13
console.log(Math.round(12.56)); // 12


console.log(Math.random());
console.log(Math.floor(Math.random()*10));

console.log(Math.max(10,20,33,11));
console.log(Math.min(78,56,90,77));

console.log(Math.pow(2, 3)); // 8
console.log(Math.trunc(12.666)); //12

console.log(Math.sqrt(256)); // 16

console.log(Math.sign(-788)); // -1
console.log(Math.sign(788)); // 1
console.log(Math.sign(0)); // 0