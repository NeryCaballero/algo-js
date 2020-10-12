// Exercise 2.5
// Make a program that asks the favorite number of the user. 
// If that number is anything other than 42 display "Are you sure?" and ask again. 
// (This program should never end as long as the user didn't chose 42).

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question('Please enter my favorite number: '));

while (x !== 42) {
    console.log("Try again!");
    x = parseInt(readlineSync.question('Please enter my favorite number: '));
} 

console.log("How did you know!?");





