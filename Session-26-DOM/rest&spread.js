// let arr1= [1,2,3,4];
// let arr2= [5,6,7,8];

// let result =[...arr1,...arr2];
// console.log(result);

// let arr3 =["apple", "banana" , "orange" , "grapes"];

// let [first, second, third, ...others] =arr3;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(others);

// let emp = {
//   id: 101,
//   name: "vikas",
//   age: 25,
//   salary: 4000,
//   department: "IT",
// };

// let {id,name, ...rest} =emp;
// console.log(id);
// console.log(name);
// console.log(rest)

// let details = {
//   fname: "Vikas",
// };
// let { fname, lname = "Not availble" } = details;
// console.log(fname);
// console.log(lname);

//shallow copy
// let obj1 = {
//   name: "Aman",
//   age: 20,
//   address: {
//     city: "Hyderabad",
//     state: "Telangana",
//   },
// };

// let obj2 =obj1;
// obj2.name = "Vikas";
// obj2.address.city = "Pune";
// console.log(obj2);
// console.log(obj1);

// let obj2 = {...obj1};
// obj2.name = "Vikas";
// obj2.address.city = "Pune";
// console.log(obj2);
// console.log(obj1);

//object.assign method of shallow copy

// let obj1 = {
//   name: "Aman",
//   age: 20,
//   address: {
//     city: "Hyderabad",
//     state: "Telangana",
//   },
// };

// let obj2 = Object.assign({}, obj1);
// console.log(obj2);
// obj2.name = "Vikas";
// obj2.address.city = "Pune";
// console.log(obj2);
// console.log(obj1);

//deep copy

let obj1 = {
  name: "Aman",
  age: 20,
  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};

// let obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy
// obj2.name = "Vikas";
// obj2.name = "Vikas";
// obj2.address.city = "Pune";
// console.log(obj2);
// console.log(obj1);

// let obj2 = structuredClone(obj1);
// obj2.name = "Vikas";
// obj2.name = "Vikas";
// obj2.address.city = "Pune";
// console.log(obj2);
// console.log(obj1);

//api response
let response = {
  status: 200,
  data: {
    user: {
      name: "Vedant",
      age: 23,
      address: "Delhi",
    },
  },
};

let {
  data: {
    user: { name, age, address },
  },
} = response;
console.log(name);
console.log(age);
console.log(address);
