
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"


// recursive function using stack

function foo(i) {
    // base case
    if(i<0) return

    console.log(`begin: ${i}`);
    foo(i-1)
    console.log(`end: ${i}`);
}

foo(3)