// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(1,3,4));



//currying in js

function sentEmail(to) {
    return function (subject) {
      return function (body) {
        console.log(
          `email sent to ${to} with subject ${subject} and body ${body}`
        );
      };
    };
  }

  sentEmail("gfg@gmail.com")("hello")("how are you");