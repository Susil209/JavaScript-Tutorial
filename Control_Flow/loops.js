// break

/*
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
*/


// continue
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12


// for...in

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

/*
a: 1
b: 2
c: 3
*/


// for...of loop

const arr1 = [10,20,"mango",90]

for (const i of arr1) {
  console.log(i);
}

/*
  10
  20
  mango
  90
*/


// ----------------------------------------

// iterating over an object
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2


// Iterate over string 

const str = "bhubaneswar"

for (const s of str) {
  console.log(s);
}

/*
  b
  h
  u
  b
  a
  n
  e
  s
  w
  a
  r
*/


// iterating over Map

const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(key + " " + value);
}
//a 1
//b 2
//c 3



//Iterating over a Set

const iterableSet = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterableSet) {
  console.log(value);
}
// 1
// 2
// 3


