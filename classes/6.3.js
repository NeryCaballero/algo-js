// Exercise 6.3
// Create a program that will re-use the Rectangle class you created previously. 
// It should generate 1000 random instances of Rectangle with random positions and sizes. 
// Then it will display all colliding rectangles amongst those that were generated that way.

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, lenght) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    }

    // four sides coordinates : not necessary, only to help redability
    get top() { return this.topLeftYPos; }
    get left() { return this.topLeftXPos; }
    get right() { return this.topLeftXPos + this.width; }
    get bottom() { return this.topLeftYPos + this.lenght; }

    collides(otherRectangle) {
        if (this.top > otherRectangle.bottom || this.right < otherRectangle.left || 
            this.left > otherRectangle.right || this.bottom < otherRectangle.top) {
            return false;
        } else {
            return true;
        } 
    }
}

const readlineSync = require("readline-sync");

let quantity = readlineSync.question('Please enter the amount of Rectangles you will like to compare : '); //enter 1000, or better just 5 or 10...

let rectArr = [];

let topLeftXPos = Math.floor(Math.random()*100);
let topLeftYPos = Math.floor(Math.random()*100);
let width = Math.floor(Math.random()*100);
let lenght = Math.floor(Math.random()*100);

rectArr[0]=new Rectangle(topLeftXPos,topLeftYPos,width,lenght);

for (let position = quantity - 1; position > 0; position--) {
    let topLeftXPos = Math.floor(Math.random()*100);
    let topLeftYPos = Math.floor(Math.random()*100);
    let width = Math.floor(Math.random()*100);
    let lenght = Math.floor(Math.random()*100);

    rectArr[position] = new Rectangle(topLeftXPos,topLeftYPos,width,lenght);
}

console.log(rectArr);

console.log('The following rectangles collide:')
for (let i = 0; i < rectArr.length-1; i++) {
    for (let j = i+1; j < rectArr.length; j++) {
        if ( rectArr[i].collides(rectArr[j]) === true ) {
            console.log('rectangle ' + i + ' with ' + j + '.')
        }
    }
}

//==============================================================================

/* ANOTHER WAY TO CREATE THE ARRAY THAT WORKS TOO : 

for (let position = 1; position < quantity; position++){
    topLeftXPos = Math.floor(Math.random()*10);
    topLeftYPos = Math.floor(Math.random()*10);
    width = Math.floor(Math.random()*10);
    lenght = Math.floor(Math.random()*10);

    rectArr[position] = new Rectangle(topLeftXPos,topLeftYPos,width,lenght);   
}
*/ 

