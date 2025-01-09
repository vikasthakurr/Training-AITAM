/*what is conditional statement in javascript==> It is used to perform different actions based on different conditions.
1. if
2. else
3. else if
4. switch
*/

// let candidateAge= 16;
// if (candidateAge>=18) {
//     console.log("You are eligible to vote");  
// }
// else{
// console.log("You are not eligible to vote");
// }

/*
let age= 18;
if (age>18) {
    console.log("You are eligible to vote");
}
else if(age ==18){
    console.log("You are eligible to vote but you are not an adult");
}
else{
    console.log("You are not eligible to vote");
}*/


//switch statement in javascript==> It is used to perform different actions based on different conditions.

let day=70;

switch (day) {
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("Today is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid Day");
        break;
};