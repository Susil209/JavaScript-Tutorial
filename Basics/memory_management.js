"use strict";

// stack memory: (primitive values)

let myName = "Susil";
let yourName = myName;

console.log(`my name is ${myName} and your name is ${yourName}`);

yourName = "Rahul";

console.log(`my name is ${myName} and your name is ${yourName}`);

// Note: In stack, each time a new variable created and assigned
// to the values of another variable, a copy of the original value is
// created and assigned to the new variable.

// so any changes made in the new variable does not impact the
// original value.

// Heap memory: (Non-primitives)

const employee = {
  name: "Rajesh",
  age: 30,
};

const name = "Ram";
// Allocates memory for object in heap.Values
// in object are primitive,which is why they
// are stored in stack.

function getname(name) {
  return name;
}
// The function return value is given to stack after
// being evaluated in the heap

const newEmployee = employee;
// The newEmployee object will be stored in the stack and
// it will refer to the employee object in heap

console.log(getname(employee.name));
console.log(getname(newEmployee.name));

newEmployee.name = "Susil"

console.log(getname(employee.name));
console.log(getname(newEmployee.name));


// Note: In heap memory , the variable get reference to the memory space.
// If the new object variable is assigned to the original variable
// the it also gets reference to the same memory space in heap.

// Hence any changes made in the value using new variable will reflect
// in the original variable.

// Unlike in stack no copy of the values will be created.