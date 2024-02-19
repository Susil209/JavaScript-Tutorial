// Promise.all()

// Ex-1

const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve(1), 3000)
  setTimeout(() => reject("p1 failed"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve(2), 1000)
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve(3), 2000)
  setTimeout(() => reject("p3 fails"), 2000);
});

// Promise.all([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// Ex-2

/*
let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    // all responses are resolved successfully
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then((users) => users.forEach((user) => console.log(user.name)));
*/

// Promise.allSetteled()

//Ex-1
// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));
// .catch(err => console.error(err));

//Ex-2
/*
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`${urls[num]}: ${result.reason}`);
    }
  });
});
*/

// Promise.race()
// Promise.race([p1,p2,p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))

// Promise.any()

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err); // [AggregateError: All promises were rejected] 
    console.log(err.errors); // ["p1 failed", Error: Whoops!, "p3 failed"]
    // let allErrors = err.errors
    // allErrors.forEach(e => {
    //     console.log(e)
    // });
  });

// Note in this case p2 settles first(1000ms) but reject, so
// p3 which is next first(2000ms) resolve got as result.
