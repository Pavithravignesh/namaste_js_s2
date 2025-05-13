// const cart = ["product1", "product2", "product3"];
const cart = [];

// consuming the pormise
const user = createOrder(cart);

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
    return pr
}


function validOrder(cart) {
    return cart.length > 0;
}

user
    .then((data) => { console.log(data) })
    .catch(function (err) {
        console.log(err.message)
    })