

// let arr2 = new Array(3,4,5,6,7,8)
// console.log(arr2);



// arr1.push(6); // to insert element at end
// arr1.unshift(0); // to insert element at start
// arr1[1]= 15;
// console.log(arr1);

// arr1.pop(); // to delete element at end
// arr1.shift(); // to delete element at start 
// console.log(arr1);



let arr1 =[1,2,3,4,5];
// arr1.forEach ((num)=>{
//     console.log(num);
// })   


//map method 

// let arr2 = arr1.map((num) =>{
//     return num*num;
// });

// console.log(arr2)
// console.log(arr1);


//filter method
// let arr3 = arr1.filter((num)=>{
//     return num%2==0
// })
// console.log(arr3);
// console.log(arr1);

//reduce method

// let arr4 = arr1.reduce((acc, num)=>{
//     return acc+num;
// },0);

// console.log(arr4);
// console.log(arr1);





// working with object

// let obj ={
//     name: "Aman",
//     age: 20,
//     isMale: true,
//     salary: 5000.00,
// }
// console.log(obj);
// console.log(obj.age);
// console.log(obj["age"]);

// obj.salary =6000;
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// array of objects

let details = [
    {
        name: "Aman",
        age: 20,
        isMale: true,
        salary: 5000.00,
    },
    {
        name: "Ganesh",
        age: 40,
        isMale: true,
        salary: 5000.00,
    },
    {
        name: "Aman",
        age: 25,
        isMale: true,
        salary: 5000.00,
    }

];

// console.log(details[1].name);
// let filterdetails = details.filter((detail)=> detail.age>22);
// console.log(filterdetails);