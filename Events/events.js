// console.log("events")

const button = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

button.addEventListener(
  "click",
  (e) => {
    let randCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    //document.body.style.backgroundColor = randCol;
    e.target.style.backgroundColor = randCol;
    console.log(e);
    console.log(e.target);
  },
  false
);

// we can use other events like focus,blur,dblclick,mouseover, mouseout
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});

//event bubbling
const images = document.querySelector("#images");
const owl = document.querySelector("#owl");

// images.addEventListener("click",function(e){
//     console.log("Image is clicked");
// }, false)

// owl.addEventListener("click",function(e){
//     // e.stopPropagation() // when click stop the bubbling
//     console.log("owl is clicked");
// },false)

// event capturing

images.addEventListener(
  "click",
  function (e) {
    console.log("Image is clicked");
  },
  true
);

owl.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation() // when click stop the bubbling
    console.log("owl is clicked");
  },
  { capture: true }
);

/*
    Image is clicke
    owl is clicked
*/

// event delegation

const container = document.querySelector("#container");

function bgChange() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

container.addEventListener("click", function (e) {
  e.target.style.backgroundColor = bgChange();
});
