// Exercise 7.1 - Number Guesser
// Make a program that generates an integer between 1 and 100 (don't display it to the user).
// Then the program should display "Guess the number" and ask the user to guess. 
// If the user enters a number which is too low it should display "Too low" and re-ask the question. 
// If the user enters a number which is too high it should display "Too high" and re-ask the question. 
// If the user guess correctly it should display "Well guessed!" and exit.


let theCorrectNumber = Math.floor(Math.random()*100);

// console.log(theCorrectNumber);

const readlineSync = require("readline-sync");

let userGuess = readlineSync.question('Guess the number: ');

while (userGuess != theCorrectNumber) {    
    if (userGuess < theCorrectNumber) {
        console.log('Too low, try again.');
        userGuess = readlineSync.question('Guess the number: ');
    } else if (userGuess > theCorrectNumber) { 
        console.log('Too high, try again.');
        userGuess = readlineSync.question('Guess the number: ');
    }
}

console.log('Well guessed! ' + theCorrectNumber + ' is the correct number.');
