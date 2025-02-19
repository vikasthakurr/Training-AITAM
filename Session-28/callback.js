// function greet(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }

// function msg() {
//   console.log("welcome to Aitam Training");
// }

// greet("Vikas", msg);

// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// function showresult(result) {
//   console.log(`result is : ${result}`);
// }

// calculate(4,6,showresult);

// console.log("loading data.....");

// setTimeout(() => {
//   console.log("data loaded.... after delay");
// }, 2000);

// console.log("process ended");

function step1(callback) {
  console.log("Step 1 called");
  callback();
}

function step2(callback) {
  console.log("Step 2 called");
  callback();
}

function step3(callback) {
  console.log("Step 3 called");
  callback();
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
