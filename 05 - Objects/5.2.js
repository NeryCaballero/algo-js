// Exercise 5.2

// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise 
// and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie 
// then display a randomized list of the previous cast that will form the new cast of your next serie.

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


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];

    return arr;
    }
}

shuffleArray(arr);


function askTvSerie(a, b, arr) {
    let obj = {
        name: a,
        year: b,
        cast: arr
    }
    return obj;
} 

askTvSerie(a, b, arr);

console.log(arr);