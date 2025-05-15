const cart = ["1", "2", 3];

function createOrder(cart, fn) {
    return fn();
}

function proceedPayment(fn) {
    return fn();
}

function showrderSummary(fn) {
    return fn();
}

function updateWallet(fn) {
    return "something";
}

createOrder(cart, () => {
    proceedPayment(() => {
        showrderSummary(
            () => { console.log(updateWallet()) }
        )
    })
})