// Exercise 2.3
// Display all even numbers between 1 and 100.
// Bonus: do two different versions. 
// The first one should use while and make a loop that will execute 100 times. 
// The second one should use for and make a loop that will execute 50 times.

let x = 1;

while (x<=100) {
    if ((x%2)==0) {
        console.log(x);
    }
    x+=1;
} 

for (let x = 1; x <= 100; x += 1) {
    if ((x % 2) == 0){
        console.log(x);
    }
}