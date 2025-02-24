// async function greet() {
//   return "hello world";
// }
// // greet();
// greet().then(console.log);

// async function fetchData(){
//     let result = await Promise.reject('Data  error');
//     console.log(result);
// }
// fetchData();

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("User data"), 5000);
//   });
// }

// async function dislayUser() {
//   console.log("fetching the data please wait........");

//   let user = await getUser();
//   console.log(user);
//   console.log("data fetched successfully");
// }
// dislayUser();

// let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function runTask() {
//   console.log("Task 1 started");
//   await delay(3000);
//   console.log("Task 1 completed");
//   console.log("Task 2 started");
//   await delay(2000);
//   console.log("Task 2 completed");
//   console.log("Task 3 started");
//   await delay(1000);
//   console.log("Task 3 completed");
// }
// runTask();

// const fetchUser = () =>
//   new Promise((resolve) => setTimeout(() => resolve("User data"), 10000));

// const fetchPost = () =>
//   new Promise((resolve) => setTimeout(() => resolve("Post data"), 3000));

// async function fetchAllData() {
//   const [user, post] = await Promise.all([fetchUser(), fetchPost()]);
//   console.log(user, post);
// }
// fetchAllData();

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function runTask() {
//   const tasks = [1000, 2000, 3000];

//   for (const time of tasks) {
//     console.log(`waiting  ${time / 1000} seconds.....`);
//     await delay(time);
//     console.log("task done");
//   }
// }
// runTask();

// handling a network request

// async function getUserData() {
//   try {
//     const response = await fetch("https://dummyjson.com/products/1");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUserData();

// async function getUserData(params) {

//     try {

//       let response = await fetch("https://dummyjson.com/products/1");

//       const data = await response.json();

//       const { title, description, category, price, reviews } = data;

//       console.log(reviews);

//       reviews.forEach((element) => {

//         const { rating, comment } = element;

//         console.table([{ rating, comment }]);

//       });

//     } catch (error) {

//       console.log(error);

//     }

//   }

//   getUserData();

// async function getuserdata(){

//     try{

//         const response = await fetch(`https://dummyjson.com/products/1`);

//         const data = await response.json();

//         const {id,title,description,price,reviews:[{rating,comment}]} =data;

//         console.table([id,title,description,price,rating,comment]);

//     }catch(error){

//         console.error(error);

//     }

// }

// getuserdata();

// async function newApi() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//     const data = await res.json();

//     console.table(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// newApi();

// async function getUserData(){

//     try{

//         let response=await fetch("https://jsonplaceholder.typicode.com/todos/1");

//         const data=await response.json();

//         console.table(data);

//     }

//     catch(error){

//         console.log(error);

//     }

// }

// getUserData();

// async function getuserdata() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     const data = await response.json();

//     console.table(data);

//     let { completed, id, title, userId } = data;

//     // console.log(completed);

//     // console.log(id);

//     // let{rating,comment}=reviews[0];

//     // // console.log(title);

//     // // console.log(description);

//     // console.log(reviews);

//     // console.log(rating);

//     // console.log(comment);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getuserdata();
