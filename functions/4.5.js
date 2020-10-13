// Exercise 4.5
// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. 
// That function must return the distance between those two points.

// Formula :
// d = √[(x1 –  x2)² + (y2 –  y1)²]

function calcDistance(x1, y1, x2, y2) {             // takes all coordinates
    let x = ((x2-x1)*(x2-x1));                      // Calculates the difference in x-coordinates and squares the difference. Assigns value to x.
    let y = ((y2-y1)*(y2-y1));                      // Calculates the difference in y-coordinates and squares the difference. Assigns value to y.
    return Math.sqrt(x+y);                          // Returns the square root of ( x + y ).
}

console.log(calcDistance(1,1,2,2));
console.log(calcDistance(1,1,3,1));
console.log(calcDistance(4,1,1,1));
console.log(calcDistance(-2,2,2,-2));


/* Examples results:

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65    */

