"use strict"

// string conversion
let x = 10 // number
let sx = String(x)
console.log(typeof sx); // string

let isX = false // boolean
let sisX = String(isX)
console.log(typeof sisX); // string



let dt = new Date()
console.log(typeof dt); // object
let sdt = String(dt)
console.log(typeof sdt); // string


// Number conversion

let st = '120' // string
let nst = Number(st)
console.log(typeof nst); // number

// Note : Mark here Number() and number are different

let valNum = '30i' // string
let newVal = Number(valNum) // NaN (Not a number)
console.log("new value after converted to number = ", newVal);
console.log("Type is = ", typeof newVal); // number

// Note: Incase of string of non numbers, value is NaN which type is number

console.log(typeof NaN); // number

let boolVal = true // boolean
let covtNum = Number(boolVal)
console.log("converted value is ", covtNum); // 1
console.log("type is ", typeof covtNum); // number

// Note: Number(true) = 1
//       Number(false) = 0

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

// Boolean conversion

let isNum = 1 // number
let boolIsNum = Boolean(isNum) 
console.log("Boolean value =", boolIsNum); // true
console.log("Type is=",typeof boolIsNum); // boolean

// Note: every value except 0 is true.
// Also conversion of empty string is false.

let empty = ""
let boolEmpty = Boolean(empty)
console.log(boolEmpty); // false
console.log(typeof boolEmpty); // boolean

// some of the string conversions(Tricky)
console.log(1 + 3); // 4
console.log("1" + 3); // 13 
console.log(1 + "3"); // 13
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33

// some of boolean conversions(Tricky)
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0

// Note: + symbol(unary plus) converts boolean type to number type