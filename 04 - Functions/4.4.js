// Exercise 4.4

let arr = [5,10,25,15,20];  

// Create a function named average(arr) that takes an array of numbers as argument and returns the average.

function average(arr) {
    return arr.reduce((a, b) => (a + b)) / arr.length;
}

console.log(average(arr));

// Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

function min(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0];
}

console.log(min(arr));


// Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

function max(arr) {
    arr.sort((a,b)=>a-b);
    x = arr.length;
    return arr[x-1]
}

console.log(max(arr));

// Create a program that asks a number to the user then generate that same amount of random numbers but also displays 
// their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function 
// created in Exercise 3.

const readlineSync = require("readline-sync");
let n = readlineSync.question('How many random numbers do you want? : ');

function rand10() {
    return (Math.round(Math.random() * 10));
} 

let a = []; 

function multiRand(n) { 
    for (let i=1; i <= n; i++) {        // i is my counter, n is the input, as long as counter is less or equal than the input
        let x = rand10();               // let x be a random number generated by rand10()
        a.push(x);                      // push that random number into array a
    }
    
}

multiRand(n)                            // call the function to form the array

console.log(a);                         // logs the array with random numbers

console.log(average(a));                // logs average
console.log(min(a));                    // logs min
console.log(max(a));                    // logs max