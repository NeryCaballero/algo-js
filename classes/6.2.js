// Exercise 6.2
// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght. 
// Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, lenght) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
        
    }

    // four sides coordinates :
    get top() { return this.topLeftYPos; }
    get left() { return this.topLeftXPos; }
    get right() { return this.topLeftXPos + this.width; }
    get bottom() { return this.topLeftYPos + this.lenght; }

    collides(otherRectangle) {

        if (this.top > otherRectangle.bottom 
            || this.right < otherRectangle.left 
            || this.left > otherRectangle.right
            || this.bottom < otherRectangle.top){
            return false;
        } else {
            return true;
        } 
    }
}

let r1 = new Rectangle(0,0,5,5);
let r2 = new Rectangle(6,6,2,2);
let r3 = new Rectangle(4,4,4,4);
let r4 = new Rectangle(3,3,2,2);
let r5 = new Rectangle(0,0,2,2);
console.log(r1.collides(r2)); //false
console.log(r1.collides(r3)); //true
console.log(r1.collides(r4)); //true
console.log(r1.collides(r5)); //true

console.log(r2.collides(r3)); //true
console.log(r2.collides(r4)); //false
console.log(r2.collides(r5)); //false

console.log(r3.collides(r4)); //true
console.log(r3.collides(r5)); //false

console.log(r4.collides(r5)); //false