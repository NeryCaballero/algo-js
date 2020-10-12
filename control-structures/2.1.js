// Exercise 2.1
// Ask the user to enter its age. If its age is at least 18 display "You are an adult". 
// If it's not the case display "You are not yet an adult".

const readlineSync = require("readline-sync");

let userAge = readlineSync.question('Please enter your age: ');

if (userAge >= 18) {
    console.log("Yay! You are an adult.");
} else {
    console.log("Yay! You are not yet an adult. Enjoy it while is lasts!");
}

