// console.log(a);
// console.log(b);
// console.log(c);

// let a = 23; //tdz
// const b = 34; //tdz
// c = 45; //

// {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// function a() {
// //   const a = 45;
//   console.log(a);

//   function b() {
//     // const a = 23;
//     console.log(a);

//     function c() {
//     //   const a = 34;
//       console.log(a);
//     }
//     c();
//   }
//   b();
// }
// a();

// var fun = () => {
//   console.log(a);

//   var a = 45;

//   var b = () => {
//     console.log(a);
//     console.log(z);
//   };
//   let z = 45;
//   b();
// };

// let result = fun();
// console.log(result);

// function scope(){
//     if(true){
//         var x=45;
//         let y =10;
//         const z= 15;
//     }
//     console.log(x);
//     // console.log(y);
//     console.log(z);
// }
// scope();

// function example() {
//   var a = 10;

//   function inner() {
//     var b = 23;
//     console.log(a);
//     console.log(b);
//   }
//   inner();
//   console.log(b);
// }
// example();

//write a function that can return or print if number is positive negative or zero
//write a function that can find sum of all elements in array

// function sum(arr){
//     return arr.reduce((acc,curr)=> acc+curr,0)
// }
// console.log(sum([1,2,3,4,5]));

// function max(arr){
//     return Math.max(...arr);
// }
// console.log(max([1,2,3,9,5]));

const items = ["apple", "orange", "mango"];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
