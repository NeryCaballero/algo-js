// Exercise 2.7
// Make a program that ask the user to enter a number named n. 
// Then ask him n times to enter a new number. 
// At the end display the sum of all the numbers collected this way.
// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

const readlineSync = require("readline-sync");


let n = parseInt(readlineSync.question('Please enter a number: '));
let sum = 0;

for (let a = 1; a <= n; a += 1) {
    m = parseInt(readlineSync.question('Please enter a number: '));
    sum = sum + parseInt(m);
} 

console.log(sum); 

