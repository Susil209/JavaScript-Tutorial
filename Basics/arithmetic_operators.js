// Arithmetic operators

let x = 10, y = 5

console.log(x+y); // 15
console.log(x-y); // 5
console.log(x*y); // 50
console.log(x/y); // 2
console.log(x%y); // 0
console.log(x**y); // 100000


console.log(++x); // 11
console.log(x++); // 11

//Arithmetic Increment opertors (prefix and postfix)

let a = 10
const b = a++ //postfix
console.log(`a=${a} and b=${b}`); // a=11 and b=10

const c = ++a
console.log(`a=${a} and c=${c}`); // a=12 and c=12

// Arithmetic Decrement operators
let x1 = 3;
const y1 = x1--;

console.log(`x1:${x1}, y1:${y1}`);
// Expected output: "x1:2, y1:3"

let a1 = 3;
const b1 = --a;

console.log(`a1:${a1}, b1:${b1}`);
// Expected output: "a1:2, b1:2"


// Unary Operator(plus)
const x2 = 1;
const y2 = -1;

console.log(+x2);
// Expected output: 1

console.log(+y2);
// Expected output: -1

console.log(+'');
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+'hello');
// Expected output: NaN


// Unary negetion
let p = 1
let t = -p

console.log(`t=${t}`); // -1
console.log("Type ", typeof t); // number

let q = "1" // string
let r = -q
console.log(`r=${r}`); // -1
console.log("Type ",typeof r); // number

