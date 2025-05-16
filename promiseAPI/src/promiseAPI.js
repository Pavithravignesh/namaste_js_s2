// TODO: Promise.all() - all or none! (fail fast)
// - when you wants to make a parallel set of API call,
// - iterable way(inside a array), we can place promise which you wants to hid parallelly,

// return every promise's provided in the iterable, only if all got resolved, even one got reject - then the whole promise.all() willl throw error as whole.

// Promise.all([p1, p2, p3]); -> 3s it's maximum time taken to completed all three API calls
//               |   |   |
//               V   V   V
//              3s  1s  2s

// 1. success case - all API call are success;

// - O/P will returned in a array having all results,
// - Promise.all() will be wait until all of them to get finish and returned as array way(provided firstly),

// 2. faillure case - second API call got rejected;

// - O/P will be error, as soon as any of the given promise in iterable got rejected, it's have no care for p1 & p3
// - another case: what if p2 is resolved and p3 got rejected, whether the success came first ot after that doesn't matter, it's throw error for whole!

//  TODO: Promise.allSettleted() - wait for all the promise's to settlet irrespecitve to their result, and provide you all result [s, ERR, S]

// Promise.allSettleted([p1, p2, p3]); 3s it's maximum time taken to completed all three API calls
//                      |   |   |
//                      V   V   V
//                      3s  1s  2s

// 1. success case - as like promise.all();

// 2. faillure case - after 3s provide you all the possible result's

// TODO: Promise.race() - first is winner;
// irrespectively whether it's rejected or resolved; it'll be return the output of the firstly executed promise,
// will take input as like other two above

// Promise.race([p1, p2, p3]); 3s it's maximum time taken to completed all three API calls
//               |   |   |
//               V   V   V
//              3s  1s  2s

// 1. success;

// - whatever the promise settlets first it'll return you the output;
// - in our case; after 1s, it'll give the resolved output of p2

// 1. faillure - what if the first promise is rejected?

// - error will be throw from p2,

// TODO: Promise.any() - wait for first success, seeking for first success,

// Promise.any([p1, p2, p3]); 3s it's maximum time taken to completed all three API calls
//                    |   |   |
//                    V   V   V
//                    3s  1s  2s

// return the first success alone,
// what if everything fails - AggregateError [err1, err2, err3];

// promise settleted - got the result; status from here

// it can either be (success, fulfilled, resolved) or (rejected, reject, failure);