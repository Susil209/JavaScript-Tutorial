// new Promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const num = Math.random();
//     if (num >= 0.5) {
//       resolve("Promise is fulfilled!");
//     } else {
//       reject("Promise failed!");
//     }
//   }, 1000);
// });

// function handleResolve(value) {
//   console.log(value);
// }

// function handleReject(reason) {
//   console.error(reason);
// }

// promise.then(handleResolve, handleReject);

// promise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
// }).finally(()=>{
//     console.log("Promise completed");
// })

//challenge

const cart = [
  {
    itemName: "shoes",
    price: 1999,
  },
  {
    itemName: "shirt",
    price: 899,
  },
  {
    itemName: "pants",
    price: 700,
  },
];

let walletBalance = 100000;

let totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

createOrder(cart)
  .then((orderId) => {
    console.log("Order Id", orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then((orderHistory) => {
    console.log(orderHistory);
    return updateWallet(orderHistory);
  })
  .then((walletDetails)=>{
    console.log(walletDetails);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart item is not validate."));
    }

    let orderId = 2988;
    if (orderId) {
      resolve(orderId);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve({
        paymentStatus: "Success",
        paymentId: 3309,
        paymentAmount: totalPrice,
        dateOfPayment: new Date().toLocaleString(),
        paymentMessage: "Your payment is successful.",
      });
    } else {
      reject(new Error("Payment failed! Please try again."));
    }
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (paymentInfo.paymentStatus === "Success") {
      resolve({ orderStatus: 1, orders: cart });
    } else {
      reject(new Error("Something went wrong."));
    }
  });
}

function updateWallet(orderHistory) {
  return new Promise(function (resolve, reject) {
    if (orderHistory.orderStatus === 1) {
      
      walletBalance = walletBalance - totalPrice;
      resolve({ balance: walletBalance, message: "Wallet updated." });
    } else {
      reject(new Error("Wallet balance is not updated"));
    }
  });
}


function validateCart(cart){
    return true;
}


