// for...of loop

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

let menu = [...hotel["starterMenu"], ...hotel["mainMenu"]]

console.log(menu)


// for...of loop print values
for(let item of menu) {
    console.log(item); 
}

/*
Spegatti
Tandori Naan
Chicken Tikka
American pie
Swarma
*/

for(let item of Object.entries(menu)){
    console.log(item);
}

/*
[ '0', 'Spegatti' ]
[ '1', 'Tandori Naan' ]
[ '2', 'Chicken Tikka' ]
[ '3', 'American pie' ]
[ '4', 'Swarma' ]
*/

for(let [key,value] of menu.entries()){
    console.log(`${key+1} -> ${value}`);
}

/*
1 -> Spegatti
2 -> Tandori Naan
3 -> Chicken Tikka
4 -> American pie
5 -> Swarma
*/



// for...in loop (for objects)

for (let key in hotel) {
    console.log(key);
}

/*
    hotelName
    location
    categories
    mainMenu
    starterMenu
    openingHours
*/


// forEach()

const numbers = [3, -1, 1, 4, 1, 5];
numbers
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    console.log(arr[idx - 1], num, arr[idx + 1]);
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined
