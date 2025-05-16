# what is async?
- a keyword, used before the declaration of a function to create asynchrounous fn();
- async fn's always return a promise, like.. mostly of the use cases, we developer return promise from a async fn(); even you're return a string from it, the async will wrapping the returned value/statement/output with the promise automatically
# what is await?
- a keyword, only be used inside you're async fn(); which suspend the execution of the function at the very line until unless that line resolve or reject.


# what's the differences between using async await and older way of hanlding the asynchronous operation
 - without async & await; it's Promise then() alone. which won't block or suspend execution of the function anyway! 
 - synchronous thing executed usually, having hold of asynchronous somewhere, and once it's resolved or rejected then again add it up to the execution thread.
 - it won't block main thread!

 - with async & await; it's async keyword will be used before the function declaration, await can't be used independedly without using async!!
 - let's look at it's execution inside;
   - unlike... the older way, await keyword will get hold of execution or suspends the execution for the function, only unless until it got executes thing's which follow this line be won't get executed.
   - beauty is if the first await call delay 1s and await call which follow the first will having delays for 2s, then second await call executes 1s after the execution of the first, which means there's no any such separate delay count for each await calls, every await calls are added up!
   - simply sums up, await call will be make the thread of execution wait until unless it get executed!

# how async works behind the scenes?



function execution is suspended

