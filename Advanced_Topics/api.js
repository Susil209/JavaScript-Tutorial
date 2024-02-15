// console.log("hello");

const name = document.querySelector(".name");
const para = document.querySelector("p");

//create a XMLHttpRequest object

let xhr = new XMLHttpRequest();
console.log(xhr);

console.log("UNSENT", xhr.readyState);

// set up the request
xhr.open("GET", "https://api.github.com/users/susil209");
console.log("OPENED", xhr.readyState);

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState);
  console.log("status", xhr.status); // 200
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState);
  console.log("Url ", xhr.responseURL);
  console.log("status", xhr.status); // 200
};

// xhr.addEventListener("readystatechange", (e) => {
//   // if (xhr.readyState === 4) {
//   //     console.log(xhr.responseText);
//   //   }

//   // or

//   if (xhr.readyState === XMLHttpRequest.DONE || xhr.status === 200) {
//     console.log(xhr.responseText);
//   } else {
//     console.log(" Oh no! There has been an error with the request!");
//   }
// });

// or ---

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE || xhr.status === 200) {
    const data = xhr.responseText;
    // console.log(xhr.responseText);
    //or
    console.log(data);
    console.log("Type ", typeof data); // string

    const jsonData = JSON.parse(data);
    console.log("Type ", typeof jsonData); // object
    console.log("name ", jsonData.name);

    name.innerText = jsonData.name;
    para.innerText = jsonData.bio;
  } else {
    console.log(" Oh no! There has been an error with the request!");
  }
};

//sending the request
xhr.send(null);
