// Exercise 4.2
// Create a function named rand10() that returns a random integer between 1 and 10. 
// Create a program that will display the result of that function each time it is run.

//Write a documentation for the rand10() function.

function rand10() {
    return (Math.round(Math.random() * 10));
}

console.log(rand10());



// Write a documentation for the rand10() function. 
// Math.random() function gets a random number between 0 and 1.
// to get a number between 1 and 10, multiply Math.random() by 10
// to get an integer use Math.round on Math.random to round to the nearest whole number.
// alternatively use:
// Math.floor to round down to a whole number:
// Math.ceil to round up to a whole number: