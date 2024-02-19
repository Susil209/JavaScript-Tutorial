// async/await

// async always returns a Promise
/*
async function getName() {
  // return Promise.resolve("Susil");
  // or
  // return new Promise((resolve,reject) => {
  //     resolve("Susil")
  // })

  // using non-promise values
  return "Susil";
}

getName().then((res) => console.log(res)); // Susil
*/

// then,catch vs. async/await

// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise 1 is resolved");
//   }, 5000);
// });

// using then,catch

// function getData() {
//   promise1.then((res) => console.log(res));
//   console.log("This is the next line");
// }

// getData();

// using async/await

// async function getData() {
//   const res = await promise1;
//   console.log(res);
//   console.log("This is the next line");
// }

// getData();

// console.log("Final console outside the function")




// multiple await statements in async function


const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 1 is resolved");
  }, 5000);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 2 is resolved");
  }, 10000);
});

async function getData() {
  const res1 = await promise1;
  console.log(res1);
  console.log("This is the first line after promise 1");


  const res2 = await promise2;
  console.log(res2);
  console.log("This is the second line after promise 2");
}

getData();



// case 1 - promise1 (10s) and promise2 (5s)

// Promise 1 is resolved                   ....|
// This is the first line after promise 1  ....|    all after 10s.   
// Promise 2 is resolved                   ....|
// This is the second line after promise 2 ....|     

// case 2 - promise1 (5s) and promise2 (10s)

// Promise 1 is resolved                   ....|
// This is the first line after promise 1  ....|   after 5s.

// Promise 2 is resolved                   ....|
// This is the second line after promise 2 ....|   after another 5s.


// Another example
/*
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. Start a timer, log after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// // wait again
setTimeout(concurrent1, 7000); // same as sequentialWait

// // wait again
setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"

*/