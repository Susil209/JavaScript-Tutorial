// lexical scope

/*
function Outer() {
  let x = 100;

  function Inner() {
    let y = 200;
    console.log("Inner ", x); // Inner 100
  }
  Inner();
//   console.log("Outer ", y); // error
}

Outer();
// console.log("Outer ", x); // Error
*/

// closures

/*
function Outer() {
  let x = 100;

  function Inner() {
    console.log("Inner ", x);
  }

  return Inner;
}

const newFunc = Outer();
newFunc(); // Inner 100

console.log(newFunc);   // Inner() {
                        //     console.log("Inner ", x);
                        //   }

*/

// Some Corner Cases

// case 1:
/*
function Outer() {
  let x = 100;

  function Inner() {
    console.log("Inner ", x);
  }
  x = 200;
  return Inner;
}

const newFunc = Outer();
newFunc(); // 200
*/

// case 2:

/*
function SuperOuter() {
  let y = 200;
  function Outer() {
    let x = 100;

    function Inner() {
      console.log("Inner ", x, y);
    }
    return Inner;
  }
  return Outer();
}

const newFunc = SuperOuter();
newFunc(); // Inner  100 200

console.log(newFunc);

*/

// case 3:
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12


// Practical closures

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

function handleColor(color) {
    return function () {
      document.body.style.backgroundColor = `${color}`;
    };
  }

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

const colorOrange = handleColor('orange');
const colorGreen = handleColor('green');

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

document.getElementById("orange").onclick = colorOrange;
document.getElementById("green").onclick = colorGreen;