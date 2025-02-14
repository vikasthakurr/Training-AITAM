// let arr1 =[1,2,3,4,5,6];
//  let arr2 =arr1;

//  arr2.push(4);
//  console.log(arr2);
//  console.log(arr1);

// spread operator
// let arr1 =[1,2,3,4,5,6];

// let arr2 = [...arr1];
// arr2.push(7);
// console.log(arr2);
// console.log(arr1);


//merge two array

// let arr1 =[1,2,3,4,5,6];
// let arr2 = [7,8,9,10];

// let result =[...arr1, ...arr2];
// console.log(result);



// let obj1 = {
//     name:"Aman",
//     age:20
// };

// let obj2 = {...obj1};
// obj2.name = "Vikas";
// console.log(obj2);
// console.log(obj1);



// merging of two objects
// let obj1 = {name:"Aman", age:20};
// let obj2 = {name:"Vikas", age:21};

// let obj1 ={
//     name: "Aman",
// };
// let obj2= {
//     age:20

// };

// let result = {...obj1, ...obj2};
// console.log(result);




// let numbers= [10,30,50];

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(...numbers));


// let arr = [10,30,50,60,79];

// let [first, second , ...rest] = [10,30,50,60,79];
// console.log(first);
// console.log(second);
// console.log(rest);


// let user = {
//     name:"Aman",
//     age:20,
//     address:"Hyderabad"
// };
// let {name, age, ...location} = user;
// console.log(name);
// console.log(age);
// console.log(location);



// shallow vs deep copy

// let obj1= {
//     name:"Aman",
//     age:20,
//     address:{
//         city:"Hyderabad",
//         state:"Telangana"
//     }
// };

// let obj2 = {...obj1}; // shallow copy
// obj2.name = "Vikas";
// obj2.address.city = "delhi"


// console.log(obj2);



// let obj1= {
//     name:"Aman",
//     age:20,
//     address:{
//         city:"Hyderabad",
//         state:"Telangana"
//     }
// };

// // let obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy
// let obj2= structuredClone(obj1);

// obj2.address.city = "delhi";
// obj2.name = "Vikas";
// console.log(obj2);
// console.log(obj1);

// let str1 ="vikas";
// let str2 = "thakur";

// let result = `my name is ${str1} and my sir name is ${str2}`;

// console.log(result);

// const paragraph = `this is line one
// this is line two

// this is line three`;

// console.log(paragraph);


// let a =6;
// let b =10;
// console.log(`the sum of ${a} and ${b} is ${a+b}`);


// function hello(name){
//     return `hello ${name}`
// }
// console.log(`${hello("Aman")}, welcome to AITAM training center`);   

