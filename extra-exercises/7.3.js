// Exercise 7.3 - Divisors
// Make a program that asks for a positive integer. 
// Then display all the divisors of that integer which are not 1 or itself.

const readlineSync = require("readline-sync");

let positiveInterger = readlineSync.question('Enter a number to display its divisors: ');

if (positiveInterger != 1) {
    let divisors = [];
    let x = positiveInterger-1;
    while (x > 1) {
        if (positiveInterger % x === 0) {
            divisors.push(x);
            x--;
        } else {
            x--;
        }
    }
    console.log(divisors);
}

