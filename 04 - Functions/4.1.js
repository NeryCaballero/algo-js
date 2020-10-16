// Exercise 4.1
// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
// Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. 
// That program must use the function you created.

// Write a documentation for the calcSurface function.

// Surface of a rectangle =  width x length

function calcSurface(w, l) {
    return w * l;
 }

const readlineSync = require("readline-sync");

let w = readlineSync.question('Enter the width of your rectangle here: ');

let l = readlineSync.question('Enter the lenght of your rectangle here: ');

console.log('The surface of your rectangle is: ' + calcSurface(w, l));