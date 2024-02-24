"use strict";

// losing this
/*
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};
*/

// let f = user.sayHi;
// setTimeout(f, 1000); // Hello undefined

// console.log(this);
// this = window (in browser)
// this = {} (in Node.js)

// solution-1: Wrapper

// setTimeout(function(){
//     user.sayHi() // Hello John
// },1000)

// solution-2: bind()
// let myFun = user.sayHi.bind(user);
// console.log(myFun);

// myFun();
//setTimeout(myFun, 1000); // Hello, John!

// Ex-2:
/*
let person = {
  firstName: "John",
};

function func(phrase) {
  console.log(phrase + ", " + this.firstName);
}

//person.func();// error

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello");
*/

// Ex-3

class React {
  constructor() {
    this.library = "React";
    this.port = "http://localhost:3000";

    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("Handle Clicked");
    console.log(this.port);
  }
}

const app = new React()