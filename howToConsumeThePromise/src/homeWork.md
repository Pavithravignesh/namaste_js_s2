# what is promise in js
 - as MDN defination says, promise is a object representing the eventual completion or failture of an asynchronous operation,
 - which conveys something like; when a asynchronous operation provides some data asychrounously, promise will receives it and have it as a value against to the object's only key named data.
   
# what it does is or what existing problem it resolves?

- callBack Hell - passing a fn() as a parameter to another fn, and passing another one fn to that, and soon soon, it's make the code grow horizontially instead of vertically!.
   
- inversion of control - excution control of the passed callback will be over to that fn() which having it as a parameter, which some sort of the bad things for maintainability and future run. So, using promise which provides .then handler to make the other depended fn() run in a linear and way more controlled way then the previous way of doing thing,
- however, never forget you should return the data like what that following executable function in the line should be have!