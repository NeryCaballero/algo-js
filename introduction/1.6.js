// Exercise 1.6
// Ask two integers to the user. 
// Display the rest of the integer division of the two numbers.


const readlineSync = require("readline-sync");

let firstInterger = readlineSync.question('Can you give me a number WITHOUT a decimal?');
let secondInterger = readlineSync.question('Can you give me another, smaller than the previous one :D?');

console.log(firstInterger % secondInterger);