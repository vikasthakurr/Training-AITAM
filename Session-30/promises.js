// what is promises =>
// promises are used to handle asynchronous operations in javascript.
//they are having three response of promises 1. pending 2. resolved 3. rejected
//promises takes two argument in function parameter 1. resolve 2. reject

// const myPromise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

//consume the promise
// myPromise
//   .then((message) => {
//     console.log("success:", message);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   })
//   .finally(() => {
//     console.log("operation finished");
//   });

//promise chaining

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("data fetched"),2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//     return "processing the data......";
//   })
//   .then((message) => {
//     console.log(message);
//     return "Data processed successfully.....";
//   })
//   .then(console.log)
//   .catch(console.error);

//handling of error in promises........

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("❌ data not fetched"), 2000);
//   });
// };

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("operation finished"));

// Promise.all

// const promise1 = Promise.resolve("task 1 resolved");
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("task 2 resolved"), 2000)
// );
// const promise3 = Promise.resolve("task 3 resolved");

// Promise.all([promise1, promise2, promise3])
//   .then((result) => console.log("all task has been:", result))
//   .catch((error) => console.error(error));

// Promise.allSettled

// const p1 = Promise.resolve("task 1 resolved");
// const p2 = Promise.reject("task 2 rejected");

// Promise.allSettled([p1, p2])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// Promise.race

// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("task 1 resolved"), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("task 2 resolved"), 1000)
// );

// Promise.race([p1, p2]).then(console.log).catch(console.error);

// Promise.any
// const p1 = Promise.reject("task 1 rejected");
// const p2 = Promise.resolve("task 2 resolved");
// const p3 = Promise.reject("task 3 rejected");

// Promise.any([p1, p2, p3]).then(console.log).catch(console.error);

// Summary of promises
// Method	             Description
// Promise.resolve()	 Instantly resolves a promise.
// Promise.reject()	     Instantly rejects a promise.
// Promise.all()	     Waits for all promises to resolve or one to reject.
// Promise.allSettled()  Waits for all promises to settle (resolve/reject).
// Promise.race()	     Resolves/rejects as soon as the first promise settles.
// Promise.any()	     Resolves with the first fulfilled promise.