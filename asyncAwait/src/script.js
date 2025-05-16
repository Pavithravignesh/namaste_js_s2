// return a string from async
// 1. if already a promise being return then nothing will be wrapping; wrapping of promise only when non-promise get returned out of async

const str = "returnStr";
const pr = new Promise((resolve, reject) => {
    resolve("promised value");
});

async function returnStr() {
    // return str; // wrapping with primose; since, it's not a promise!
    return pr; // no need for anything to wrap; since, it itself is a promise
}
returnStr()
    .then((data) => console.log(data));

// using await with async - this combo is used to handle promise's
// however, how thing's has been before async await?

async function getDataNormally() {
    // older way handling async
    // return pr.then((data) => data);
    // using await with async
    return await pr;
}
console.log(getDataNormally());