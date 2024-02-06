// this

const user = {
    username: "susil",
    id:200,

    call: function () {
        console.log(`${this.username} is calling.`);
    }
}

user.call() // susil is calling.

// this in function context
function getThis() {
    return this;
}
  
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
  
obj1.getThis = getThis;
obj2.getThis = getThis;
  
console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }


// arrow function
const elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];


// elements.forEach((e) => {
//     return e.length
// })

elements.forEach((e) => console.log(e.length))

// --------------------------------------

const getObj = () => ({username: 'Susil'})
console.log(getObj()); // { username: 'Susil' }

// higher order function

// callback(passing function as argument)

const uppercase = (str) => {
    return str.toUpperCase()
}

const lowercase = (str) => {
    return str.toLowerCase()
}

const transform = (str, fun) => {
    return fun(str)
}

console.log(transform("hello JavasCript", lowercase)); // hello javascript


// Function returning another function

const result = (msg) => {
    return (marks) => {
        console.log(`${msg} ${marks}`);
    }
}

console.log(result("You got marks = ")(88));

