// Exercise 1.5
// Ask two numbers with decimal part to the user. 
// For the first one only keep the integer part. Then multiply them and display the result.
// You will have to perform a search on Google to know how to only keep the integer part of a number.


const readlineSync = require("readline-sync");

let firstDecimal = readlineSync.question('Can you give me a number with a decimal?');
let secondDecimal = readlineSync.question('Can you give me another :D?');
let myInterger = Math.trunc(firstDecimal);
console.log(myInterger * secondDecimal);

