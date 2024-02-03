// Logical Operators

const a = 3;
const b = -2;

console.log(a > 0 && b > 0); // false

console.log(a > 0 || b > 0); // true

console.log(!a); // false
console.log(!!a); // true


// nullish coalesing operator
console.log(null ?? "string"); // string 
console.log(undefined ?? "new string"); // new string

console.log(false ?? 10); // false
console.log(0 ?? 100); // 0
console.log(true ?? 1000); // true

// ternary operator
100 % 5 == 0 ? console.log("Div by 5") : console.log("Not div by 5");
