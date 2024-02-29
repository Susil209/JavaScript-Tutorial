// Enhanced object literals

const address = {
  city: "Bhubaneswar",
  country: "India",
  zipcode: "99008",
};

const employee = {
  id: "28897",
  empName: "Susil",
  address,
};

console.log(employee);

/*
{
  id: '28897',
  empName: 'Susil',
  address: { city: 'Bhubaneswar', country: 'India', zipcode: '99008' }
}
*/

// dynamic keyname

let currentCard = "bronze";

let cardHolder = {
  cardHolderId: "8u778",
  cardHolderName: "Vk Singh",
  [currentCard]: `My current status ${currentCard}`,
  cardDetails: {
    cardType: "Mastercard",
    cardNumber: "899890019992",
    lastUsed: "29-June-2000",
    cardExpiry: "09/22",
  },
};

// console.log(cardHolder);

// optional chaining

// console.log(cardHolder.cardDetails?.cardproperty); // undefined
// console.log(cardHolder.cardDetails?.cardNumber); // 899890019992

const express = function (val) {
  return {
    toBeVal: function (val1) {
      if (val === val1) return true;
      else throw new Error("Not Equal");
    },

    notToBe: function (val1) {
      if (val !== val1) return true;
      else throw new Error("Equal");
    },
  };
};

// const func = () => express(5).toBeVal(5);
const func = () => express(5).notToBe(5);
console.log(func());
