// Exercise 5.1
// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV series:
// Name, Production year, Names of the cast members (there can be as much as the user want)
// That function must gather all the data in a single object and return it. The data structure must be elegant.
// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

const readlineSync = require("readline-sync");

let a = readlineSync.question('Please enter the name of your favorite TV series : ');
let b = readlineSync.question('Please enter its year of production : ');

let arr = [];
let stop= 'a';

while (stop!==''){
    stop=readlineSync.question('Please enter as many cast members as you want. To STOP enter a blank response: ');
    if (stop!=="") {
        arr.push(stop);
    }
}    

function askTvSerie(a, b, arr) {
    let obj = {
        name: a,
        year: b,
        cast: arr
    }
    return obj;
}

console.log(JSON.stringify(askTvSerie(a, b, arr),null,5));

