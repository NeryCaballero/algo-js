// Exercise 1.4
//Make this same thing as Exercise 2 but 
//this time ask the user for the name, the first name and the city.

const readlineSync = require("readline-sync");

let userFirstName = readlineSync.question('Can you give me your first name please?');
let userLastName = readlineSync.question('Can you give me your last name please?');
let userCity = readlineSync.question('Can you give me your city please?');

console.log("Hello " + userFirstName + " " + userLastName + " from " + userCity + ".");

