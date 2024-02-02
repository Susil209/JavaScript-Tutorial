"use strict"

const fruits = ['mango', 'apple', 'orange', 'pineapple']

console.log(fruits);
console.log(typeof fruits); // object

const random_arr = ['safari', 233, true, new Date(), Math.PI]
console.log(random_arr); // heterogeneous elements

console.log(random_arr[2]); // true
console.log(random_arr['2']); // true

// empty slots

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

console.log(colors); // [ 'red', 'yellow', 'blue', <2 empty items>, 'purple' ]

const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

console.log(fruits.length) // 4

console.log(fruits.push('Jackfruit')); // 5
console.log(fruits); //[ 'mango', 'apple', 'orange', 'pineapple', 'Jackfruit' ]

console.log(fruits.unshift('grapes')); // 6
console.log(fruits); // [ 'grapes', 'mango', 'apple', 'orange', 'pineapple', 'Jackfruit' ]


console.log(fruits.pop()); // Jackfruit
console.log(fruits); // [ 'grapes', 'mango', 'apple', 'orange', 'pineapple' ]

console.log(fruits.shift()); //grapes
console.log(fruits); // [ 'mango', 'apple', 'orange', 'pineapple' ]

console.log(fruits.includes("mango")); // true
console.log(fruits.indexOf("mango")); // 0

console.log(fruits.join()); // mango,apple,orange,pineapple
console.log(fruits.join('')); // mangoappleorangepineapple
console.log(fruits.join('+')); // mango+apple+orange+pineapple
console.log(fruits.join('-')); // mango-apple-orange-pineapple

console.log(fruits); // [ 'mango', 'apple', 'orange', 'pineapple' ]

console.log(fruits.push('grapes', 'papaya', 'jackfruit')); // 7
console.log(fruits); 
/*
[
  'mango',
  'apple',
  'orange',
  'pineapple',
  'grapes',
  'papaya',
  'jackfruit'
]
*/

console.log(fruits.slice(2,5)); // [ 'orange', 'pineapple', 'grapes' ]
console.log(fruits); 
/*
[
  'mango',
  'apple',
  'orange',
  'pineapple',
  'grapes',
  'papaya',
  'jackfruit'
]
*/


console.log(fruits.splice(2,4)) // [ 'orange', 'pineapple', 'grapes', 'papaya' ]
console.log(fruits); // [ 'mango', 'apple', 'jackfruit' ]

// not to remove any ele at last and insert new ele ==> same as push()
console.log(fruits.splice(fruits.length, 0 , 'cacktus')); // []
console.log(fruits); // [ 'mango', 'apple', 'jackfruit', 'cacktus' ]

console.log(fruits.splice(-2,1, 'pineapple')); // [ 'jackfruit' ]
console.log(fruits); // [ 'mango', 'apple', 'pineapple', 'cacktus' ]


// nested array

const arr1 = ['apple', 'orange', 'mango']
const arr2 = ['banana', 'beetroot', 'guava']

//console.log(arr1.push(arr2)) // 4
console.log(arr1); // [ 'apple', 'orange', 'mango', [ 'banana', 'beetroot', 'guava' ] ]


console.log(arr1.concat(arr2)); // [ 'apple', 'orange', 'mango', 'banana', 'beetroot', 'guava' ]


// concat using spread operator

const newArr = [...arr1, ...arr2] // [ 'apple', 'orange', 'mango', 'banana', 'beetroot', 'guava' ]
console.log(newArr);

const test = [1,2,[3,[4,5]]]
console.log(test.flat(Infinity)); //[ 1, 2, 3, 4, 5 ]

console.log(newArr.reverse()); // [ 'guava', 'beetroot', 'banana', 'mango', 'orange', 'apple' ]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [ 1, 100000, 21, 30, 4 ]


// static methods

// all following calls return true

console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a", "b", "c", "d")));
console.log(Array.isArray(new Array(3)));
// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype));


// all following calls return false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));

const n1 = Array.from("array")
console.log(n1); // [ 'a', 'r', 'r', 'a', 'y' ]

const n2 = Array.from([1,2,3], x => x*2)
console.log(n2);// [ 2, 4, 6 ]

console.log(Array.of(1, 2, 3)); // [1, 2, 3]