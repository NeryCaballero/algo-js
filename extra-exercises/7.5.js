// Exercise 7.5 - Array Sort
// Create a program that can sort an array without using Array.sort() or a similar method. 
// Test it with multiple arrays of numbers.

const readlineSync = require("readline-sync");

const numberOfElements = readlineSync.question('Please enter the amount of elements you which to have in your array: ');

let myArray = [];

myArray[0] = Math.floor(Math.random()*100);

let i = 0; 
while (i < numberOfElements-1) {
    newElement = Math.floor(Math.random()*100);
    myArray.push(newElement);
    i++;
}

console.log(myArray);

// we have now a random array YaY !

function sortMyArray(myArray) {
    for (i=0; i<numberOfElements; i++) {
        for (j=i+1; j<numberOfElements; j++) {
            if (myArray[i] > myArray[j]) {
                temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;
            }
        }
    }

}

sortMyArray(myArray);
console.log(myArray);
