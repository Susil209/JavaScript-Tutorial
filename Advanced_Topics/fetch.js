// using fetch()

// const GITHUB_URL = "https://api.github.com/users/susil209";
// const user = fetch(GITHUB_URL)

// console.log(user); // Promise { <pending> }

// // promise chaining
// user.then((response) => {
//     console.log(response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// fetch() using async/await

const GITHUB_URL = "https://api.github.com/users/susil209";

async function handlePromise() {
  try {
    const responseObject = await fetch(GITHUB_URL); // returns Promise
    const jsonValue = await responseObject.json(); // returns another Promise
    // console.log(jsonValue);
    console.log(responseObject.status)
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
