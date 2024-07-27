let array1 = ["Hello", "World", "!"];
let array2 = ["How's", "you", "?"];

// array1.push(array2);

// console.log(array1);
// console.log(array1.flat(1)); // flat is non mutative function


// console.log(array1.join(array2)); // non mutative and returns a string


// console.log(array1.concat(array2)) // non mutative but retuns an array

// instead of cooncat we can use spread operator
let a =[...array1, ...array2];
console.log(a);

// if we have an array that contains array inside of it and the inner array contains another array and so on we use flat according to the level of the array we want to flatten;

let new_array = [1,2, [3,4], 5, [6, [7,8,[9,0]]]];
console.log(new_array.flat(3)); // goes three levels inside


// if we want to check that the value coming from database or any other souce is in array or not?

let myVar = '124 new obourn street';

// console.log(Array.isArray(myVar)); // it give false --> non mutative only gives true or false to chack weatehr the given varibale is array or not.

 // mutative converts the 
// console.log( Array.from(myVar)); // gives a new array if there is a string given 


console.log(Array.from({myName: "manish", email : "mbishnoi@example.com" }).keys()); // it will give an empty array as we have not defined from which the array should be generated keys or values


let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // it will give a new array by combining all the inputs given
