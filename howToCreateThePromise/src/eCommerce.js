// const cart = ["product1", "product2", "product3"];
const cart = [];

// old way
// function createOrder(cart, fn) {
//     fn();
//     return "createOrder has been completed!!";
// }

// function proceedPayment(fn) {
//     fn();
//     return "proceedPayment has been completed!!";
// }

// function showrderSummary(fn) {
//     fn();
//     return "showrderSummary has been completed!!";
// }

// function updateWallet(fn) {
//     // fn();
//     return "updateWallet has been completed!!";
// }

// console.log(createOrder(cart, () => {
//     console.log(proceedPayment(() => {
//         console.log(showrderSummary(() => {
//             console.log(updateWallet());
//         }));
//     }));
// }));

// new way
// provideing the promise
function createOrder() {
    return new Promise(function (resolve, reject) {
        if (cart.length > 0) {
            resolve("createOrder has been completed!!");
        } else {
            reject(new Error("createOrder has failled!!"));
        }
    })
}

function proceedPayment() {
    return new Promise(function (resolve, reject) {
        if (cart.length > 0) {
            resolve("proceedPayment has been completed!!");
        } else {
            reject(new Error("proceedPayment has failled!!"));
        }
    })
}

function showrderSummary() {
    return new Promise(function (resolve, reject) {
        if (cart.length > 0) {
            resolve("showrderSummary has been completed!!");
        } else {
            reject(new Error("showrderSummary has failled!!"));
        }
    })
}

function updateWallet() {
    return new Promise(function (resolve, reject) {
        if (cart.length > 0) {
            resolve("updateWallet has been completed!!");
        } else {
            reject(new Error("updateWallet has failled!!"));
        }
    })
}

createOrder()
    .then((data) => {
        return proceedPayment()
    })
    .then((data) => {
        return showrderSummary()
    })
    .then((data) => {
        return updateWallet()
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));