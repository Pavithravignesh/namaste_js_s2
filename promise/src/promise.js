// [object representsing the eventual compltion or failure of an asynchronous operation]
// issue's promise revsoles;
// - callback Hell,
// - inversion of control
// inside to promise bject; we are having,
// 1. ProtoType
// 2. PromiseState 
// - immutateable, calls just once and able to access pass it where ever you want to,
// - states can be pending | fulfill | rejected
// - tells you the actual state of the promise
// 3. PromiseResult - having result 
// reason behind why while logging the users;
// 1. when the time of logging it, the status was pending,


const GITHUB_URL = "https://api.github.com/users/Pavithravignesh";

// 2. however after sometime, it got changed to fulfilled then that's why inside
const users = fetch(GITHUB_URL);
console.log(users);
users.then(function (mthuramalingam) {
    console.log(mthuramalingam);
})