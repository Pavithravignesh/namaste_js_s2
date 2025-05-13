// const cart = ["product1", "product2", "product3"];
const cart = [];

// consuming the pormise
createOrder(cart)
    .then((data) => { return data })
    .catch(function (err) {
        console.log(err.message)
    }) // which make every then handler is independed from one another,
    .then((data) => {
        console.log("no matters, I'll be definitly be called")
        return processedWithPayment("data");
    })
    .then((data) => { console.log(data) })

// producer portion of promise
function createOrder(cart) {
    // creating the promise
    const pr = new Promise(function (resolve, reject) {
        // first validation for placing the order
        // const validOrder = false;
        if (!validOrder(cart)) {
            const err = new Error("cart is not valid pam loves jim");
            reject(err);
        }

        // logic for creating the order
        // after we'll be going the orderId from the backend
        const orderId = "orderId";
        if (orderId) {
            setInterval(function () {
                resolve(orderId);
            }, 5000);
        }
    });

    // returning the promise
    return pr;
}

function processedWithPayment(orderId) {
    // logic for implementing the processed with payment thing
    return new Promise(function (resolve, reject) {
        if (orderId) {
            resolve("processed with the payment");
        } else {
            reject(new Error("payment has failled to proceed"));
        }
    })
}

function validOrder(cart) {
    return cart.length > 0;
}