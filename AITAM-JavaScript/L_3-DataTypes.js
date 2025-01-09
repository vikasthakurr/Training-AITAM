/*
Datatypes in javascript
1. Primitive Datatypes ==> Number, string,boolean, undefined,null and symbol.
2. Non-Primitive Datatypes ==> object, array and function.
*/


// 1. Number ==> It is used to represent both integer and floating point numbers. range of this number is  2^53. if your number is greater than that you can use bigint.

//2. string ==> It is used to represent a sequence of characters. It is enclosed in single quotes(''), double quotes("") or backticks(``).

//3. boolean ==> It is used to represent a logical value. It can have two values true or false.

//4. undefined ==> It is used to represent an undefined value.

//5. null ==> It is used to represent an empty value.

//6. symbol ==> It is used to represent a unique value.




// console.log(studentName);
// console.log(studentAge);
// console.log(studentIsMale);
// console.log(salary);
// console.log(studentMarks);
// console.log(studentAddress);

// console.table({studentName,studentAge,studentIsMale,salary,studentMarks,studentAddress});

//typeof function() in javascript==> It is used to check the datatype of the variable.

// let studentName = "John";
// let studentAge = 20;
// let studentIsMale = true;
// let salary= 5000.00;
// let studentMarks = null;
// let studentAddress;

// console.log(typeof studentName);
// console.log(typeof studentAge);
// console.log(typeof studentIsMale);
// console.log(typeof salary);
// console.log(typeof studentMarks);
// console.log(typeof studentAddress);


// non primitive datatype ==> object, array and function.
//Object ==> It is used to represent a collection of key-value pairs.

// how to create object

// let person= {
//     name: "John",
//     age: 20,
//     isMale: true,
//     salary: 5000.00,
//     marks: 500
// };
// console.log(person);
// console.log(typeof person);
// console.log(person.age);


//Array ==> It is used to represent a collection of elements.

// let cars =["BMW","Audi","Mercedes","Toyota","TATA"];
// console.log(cars);

// function in javascript ==> function is a block of code that performs a specific task. function is only execute when it is called or invoked. and function is used to avoid code duplication.

//how to create function.....

function add(a,b){
    return a+b;
}
console.log(add(5,5));
console.log(add(89.96,58.0));
console.log(add(100,200));