// Exercise 3.4
// Write a program that will display the minimum and maximum elements of a given array.

let a = [37, 15, 3, 59, 22, 48, -8, 1];

a.sort((a,b)=>a-b);

x = a.length;

console.log('The min vaue is ' + parseInt(a[0]) + ' and the max value is ' + parseInt(a[x-1]) + '.');

