"use strict";

// Call()
// Ex-1

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price, category) {
  Product.call(this, name, price); // note here the first argument this refers to
  // the current function Food
  this.category = category;
}

const pasta = new Food("Pasta", 149, "Noodles");
const sandwitch = new Food("Sandwitch", 89, "Vegetables");

//console.log(pasta); // Food { name: 'Pasta', price: 149, category: 'Noodles' }

// Ex-2

/*
let mainPlane = {
  airplane: "FlyIndia",
  iatacode: "FI",
  bookings: [],
  book: function (flightNumber, name) {
    console.log(
      `${name} booked flight on ${this.airplane} with fight number ${
        this.iatacode + "_" + flightNumber
      }`
    );

    this.bookings.push({
      flightName: `${this.airplane}`,
      name: name,
      flightNumber: `${this.iatacode + "_" + flightNumber}`,
    });
  },
};

let childPlane = {
  airplane: "AirIndia",
  iatacode: "AI",
  bookings: [],
};

// let book = function (flightNumber, name) {
//   console.log(`${name} booked flight on ${this.airplane} with fight number
//   ${this.iatacode + "_" + flightNumber}`);
// };

mainPlane.book(654, "Jimmy");
// Jimmy booked flight on FlyIndia with fight number FI_654

console.log(mainPlane.bookings);
//[ { flightName: 'FlyIndia', name: 'Jimmy', flightNumber: 'FI_654' } ]

let newBooking = mainPlane.book;
//newBooking(919, "Josh"); // error -> undefined

newBooking.call(childPlane, 919, "Josh")
// Josh booked flight on AirIndia with fight number AI_919

console.log(childPlane.bookings);
//[ { flightName: 'AirIndia', name: 'Josh', flightNumber: 'AI_919' } ]

*/

//Ex-3

let mainPlane = {
  airplane: "FlyIndia",
  iatacode: "FI",
  bookings: [],
};

let childPlane = {
  airplane: "AirIndia",
  iatacode: "AI",
  bookings: [],
};

// multi-argument
let book = function (flightNumber, name) {
  console.log(
    `${name} booked flight on ${this.airplane} with fight number ${
      this.iatacode + "_" + flightNumber
    }`
  );
  this.bookings.push({
    flightName: `${this.airplane}`,
    name: name,
    flightNumber: `${this.iatacode + "_" + flightNumber}`,
  });
};

// book.call(mainPlane, 911, "Katie");
// Katie booked flight on FlyIndia with fight number FI_911

// book.call(childPlane, 809, "Minato");
// Minato booked flight on AirIndia with fight number AI_809

// console.log(mainPlane);
// {
//     airplane: 'FlyIndia',
//     iatacode: 'FI',
//     bookings: [ { flightName: 'FlyIndia', name: 'Katie', flightNumber: 'FI_911' } ]
// }

// console.log(childPlane);
// {
//     airplane: 'AirIndia',
//     iatacode: 'AI',
//     bookings: [
//       { flightName: 'AirIndia', name: 'Minato', flightNumber: 'AI_809' }
//     ]
// }



// apply()

book.apply(mainPlane, [911, "Katie"]);
book.apply(childPlane, [809, "Minato"]);

console.log(mainPlane.bookings);
console.log(childPlane.bookings);

// Katie booked flight on FlyIndia with fight number FI_911
// Minato booked flight on AirIndia with fight number AI_809
// [ { flightName: 'FlyIndia', name: 'Katie', flightNumber: 'FI_911' } ]
// [ { flightName: 'AirIndia', name: 'Minato', flightNumber: 'AI_809' } ]