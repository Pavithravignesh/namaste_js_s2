// // Promise.all() - waits till all get completed
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 SUCCESS"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 fail"), 1000);
// })


// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 SUCCESS"), 2000);
// })

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.error(err)
//     })

// // Promise.allSettled() - waits till all get completed
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 SUCCESS"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 fail"), 1000);
// })


// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 SUCCESS"), 2000);
// })

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.error(err)
//     })

// // Promise.race() - finishes as soon as the first results comes,
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 SUCCESS"), 5000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 fail"), 4000);
// })


// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 SUCCESS"), 5000);
// })

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.error(err)
//     })


// Promise.any() - waits till all get completed
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 fail"), 5000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 fail"), 4000);
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3 fail"), 5000);
})

Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
        console.log(err.errors) // to handle aggregateError
    })