// Static methods

const employee = {
    id: "299920",
    empName: "R.K. Sagar",
    batch: 2022,
    workStatus: "Progress",
    assignment: null,
}

// Object.freeze(employee)
// employee.batch = 2024 // error

const manager = {
    id: "2239",
    name: "SS Kirti",
    assignedProjectIds : ["PS09", "PS88", "LT88"],
    assignedEmp: 90,
    currentStatus: "Open",
    isOnsite: true
}

const mergedObjects = Object.assign({}, employee, manager)
console.log(mergedObjects);

const keys = Object.keys(employee)
console.log(keys); // [ 'id', 'empName', 'batch', 'workStatus', 'assignment' ]

const values = Object.values(employee)
console.log(values);// [ '299920', 'R.K. Sagar', 2022, 'Progress', null ]

const entries = Object.entries(employee)
console.log(entries);
/* 
[
  [ 'id', '299920' ],
  [ 'empName', 'R.K. Sagar' ],
  [ 'batch', 2022 ],
  [ 'workStatus', 'Progress' ],
  [ 'assignment', null ]
]

*/

// instance methods

console.log(employee.hasOwnProperty("empName")); // true

// destructuring

const {empName: eName, batch, workStatus} = employee

console.log(`Employee name is ${eName} and batch is ${batch}`);
//Employee name is R.K. Sagar and batch is 2022



// destructuring using default value

const obj = {
  a: 10,
  b: 15
}

const {a: newa=20, b: newb=25, c=100} = obj

console.log(newa, newb, c) // 20 25 100


// destructuring in nested objects

const hotel = {
  hotelName: "Sanferios",
  location: "Bhubaneswar",
  categories: ["Chinese","Italian","Maxican","Indian"],
  mainMenu:["Chicken Tikka","American pie","Swarma"],
  starterMenu: ["Spegatti","Tandori Naan"],
  openingHours: {
      sunday: {open: "09:00AM",close: "11:00PM"},
      wednesday: {open: "09:00AM",close: "11:00PM"},
      saturday: {open: "09:00AM",close: "11:00PM"}
  }
}

let {openingHours} = hotel

console.log(openingHours);

/*
{
  sunday: { open: '09:00AM', close: '11:00PM' },
  wednesday: { open: '09:00AM', close: '11:00PM' },
  saturday: { open: '09:00AM', close: '11:00PM' }
}
*/

let {sunday: s,wednesday: w} = openingHours
console.log(s,w); // { open: '09:00AM', close: '11:00PM' } { open: '09:00AM', close: '11:00PM' }

let {sunday: {open, close}} = openingHours
console.log(open,close); // 09:00AM 11:00PM









// JSON

// parse()

const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));
/*
{
  browsers: {
    firefox: { name: 'Firefox', pref_url: 'about:config', releases: [Object] }
  }
}
*/



// stringify()
console.log(JSON.stringify(employee));
//{"id":"299920","empName":"R.K. Sagar","batch":2022,"workStatus":"Progress","assignment":null}