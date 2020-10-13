// Exercise 3.1
// Write a program that will add all the elements of an array.  

// Using while() 

let array1 = [1, 2, 3, 4, 5]; 

let x1 = array1.length;

let sum1 = 0;

let y1 = 0;

while (y1 < x1) {
    sum1 = sum1 + parseInt(array1[y1]);
    y1 += 1;
}

console.log("Array 1 adds up to " + sum1);

// Using for() 

let array2 = [100, 101, 102];

let x2 = array2.length;

let sum2 = 0;

for (let y2 = 0; y2 < x2; y2 += 1) {
    sum2 = sum2 + parseInt(array2[y2]);
}

console.log("Array 2 adds up to " + sum2);