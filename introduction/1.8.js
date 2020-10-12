// Exercice 1.8
// Create a "Story Teller".
// Ask questions to the user about different things. 
// Store the results he gives to you. Display them in a way that it creates a fun story!
// Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.

const readlineSync = require("readline-sync");

let q3 = readlineSync.question('Whats the first letter on Red?');
let q4 = readlineSync.question('Whats the first letter on Tower?');
let q1 = readlineSync.question('Whats the first letter on Flamingo?');
let q2 = readlineSync.question('Whats the first letter on Apple?');

readlineSync.question('What was the first thing you did this morning?');

console.log("Liar! You " + q1 + q2 + q3 + q4 + ". Hahahahaha!!!");


