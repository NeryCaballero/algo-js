// Exercise 7.2 - Fibonacci Numbers
// Make a program that asks for an integer n and generates the n first Fibonacci numbers.


const readlineSync = require("readline-sync");

let n = readlineSync.question('Enter a number to generate that Fibonacci sequence: ');

let a = 0;
let b = 1;

while (n>=1) {
    n--;
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}



