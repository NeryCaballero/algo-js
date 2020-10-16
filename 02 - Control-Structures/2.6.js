// Exercise 2.6
// Make a program that ask the user to enter a number between 1 and 7. 
// Depending on the number, display the day of the week that correspond.
// (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question('Please enter a number (1-7): '));

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log(week[x-1]);