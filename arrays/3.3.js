// Exercise 3.3
// Write a program that will create a duplicate of a given array.


// Make a first version that will only do it using push(). 

let a = [1, 2, 3, 4];
let b = [];

for(let i=0; i<a.length; i++){
    b.push(a[i]);
}

console.log(b);



// Make a second version that uses a single method call to perform the copy. 

let original = ['apple', 'pear', 'strawberry', 'banana'];

// Using Slice()

let copy1 = original.slice(0);

console.log(copy1);

// Using Spread

let copy2 = [...original];

console.log(copy2); 

// ====================== 

// test:

original.push('orange'); // added a new element to original

console.log(original) // element added

console.log(copy1, copy2); // copy 1 and 2 remains unaltered.




