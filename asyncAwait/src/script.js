// return a string from async
// 1. if already a promise being return then nothing will be wrapping; wrapping of promise only when non-promise get returned out of async

const str = "returnStr";
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promised value");
    }, 3000);
});

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promised value");
    }, 2000);
});

// async function returnStr() {
//     // return str; // wrapping with primose; since, it's not a promise!
//     return pr; // no need for anything to wrap; since, it itself is a promise
// }
// returnStr()
//     .then((data) => console.log(data));

// using await with async - this combo is used to handle promise's
// however, how thing's has been before async await?

async function getDataNormally() {
    // // older way handling async
    // pr.then((data) => console.log(data)); // 2nd
    // console.log("first") // 1st
    // using await with async
    // TODO: JS engine was waiting for promise to resolved
    const output = await pr; // line of execution starts to waits here, all the below await call where executed as the time sums up, if the following await having 2s of delay, the second call will be executed 2s after the following execution
    console.log(output); // 1st - delay 1s; if it's first call and having delay higher the all the following then all those which follows will wait,
    console.log("first"); // 2nd

    const output2 = await pr2; // delay - 2s, executed 1s after the first await call,
    console.log(output2); // 3rd
    console.log("second"); // 4th

}
getDataNormally();