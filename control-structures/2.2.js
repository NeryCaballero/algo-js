// Exercise 2.2
// Ask the user to enter three numbers: min, max and current. 
// Display if current is between min and max.
// Bonus: if min is greater than max, display an error message to explain the user 
// he's doesn't understand anything then exit the program. (It must not ask any other question.)
// Bonus 2: be polite in the error messages. (facultative)

const readlineSync = require("readline-sync");

let min = new Number (readlineSync.question('Please enter a small number: '));
let max = new Number (readlineSync.question('Please enter a big number: '));


if (min > max) {
    console.log("To continue, please enter a number bigger than your first entry.")
} else {
    let current = new Number (readlineSync.question('Please enter a number in between: '));
    if ((current > min) && (current < max)) {
        console.log("Thanks! You have enter all numbers correctly.")
    }
}
