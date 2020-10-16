// Exercise 6.1
// Create a class named Circle with attributes xPos, yPos and radius. 
// Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
// Add a getter accessor named surface that will return the surface of the circle.
// a = pi * r
// Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        xPos = xPos + xOffset;
        yPos = yPos + yOffset;
    }

    get surface(){
        const piValue = 3.14159;
        return piValue * Math.pow(this.radius, 2); 
    }
}

let circle1 = new Circle(1, 1, 14);
console.log(circle1.surface);