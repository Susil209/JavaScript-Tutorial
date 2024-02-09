// filter()

const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const evenNums = nums.filter((n) => n % 2 == 0);

console.log(evenNums); // [
//     -2, 0,  2,  4,
//      6, 8, 10, 12
//   ]

console.log(nums); // no changes
console.log(evenNums === nums); // false

// check prime

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const primes = nums.filter(isPrime)
console.log(primes); // [ 2, 3, 5, 7, 11, 13 ]


// searching in an array

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'apple')); // [ 'apple' ]




// map()

const arr = [1, 4, 9, 16, 25]

const sqrt = arr.map(x => Math.sqrt(x))

console.log(sqrt); // [ 1, 2, 3, 4, 5 ]
console.log(arr); // [ 1, 4, 9, 16, 25 ]

// map to reformat objects

const arrOfObjs = [
    {k: 1, v: 10},
    {k: 2, v: 20},
    {k: 3, v: 30}
]

const newMap = arrOfObjs.map(({k, v}) => ( { [k]: v} ) )
//or, const newMap = arrOfObjs.map( mp => ({[mp.k] : mp.v}) )
console.log(newMap); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]



// chaining of methods
const array = [2,8,9,7,10,5,9,3,4,1,0]
const chain = array
                .filter(x => x > 4)
                .map(x => x * 10)
                .sort((a,b) => a-b) // sort in ascending order

console.log(chain);


// reduce()

const shoppingCart = [
  {
    course: "JS Mastery course",
    instructor: "Jim",
    price: 299
  },
  {
    course: "100 days of python course",
    instructor: "Angela",
    price: 399
  },
  {
    course: "complete web development course",
    instructor: "Angela",
    price: 499
  },
  {
    course: "React basic to advanced course",
    instructor: "Corey",
    price: 199
  },
  {
    course: "Nodejs for beginners course",
    instructor: "Sam",
    price: 299
  }
]


const totalPrice = shoppingCart.reduce((acc, {price}) => (acc + price), 0)
console.log(`Your total price is ${totalPrice}.Thanks for shopping.`);


// find()

console.log(shoppingCart.find(course => {
  return course.instructor === "Angela"
}));

/*
{
  course: '100 days of python course',
  instructor: 'Angela',
  price: 399
}
*/

// findIndex()

console.log(shoppingCart.findIndex(({price}) => price > 400)); // 2