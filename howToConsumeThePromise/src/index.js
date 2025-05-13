// using just callBack
// 1. passing a callBack into a fn(), and letting that fn() have control over the execution of the callBack
// 2. async function processedToPayment depends on createOrder
// issue's promise revsoles;
// - callback Hell,
// - inversion of control

const cart = ["shoes", "pants", "kurtha"];

function createOrder(cart, fn) {

    return console.log(cart, fn);
}

function processedToPayment(cardId = "") {
    return console.log(cardId);
}

const user = createOrder(cart, processedToPayment("orderId")) // passing as parameter

// promise === {data:respectiveOutput}
// 1. as soon as the fn() got executed and promise recevies the output, promise then will executed the attached fn() for once, sure!
const promise = createOrder(cart) // return orderId
promise.then(processedToPayment("orderId")); // attached to a promise