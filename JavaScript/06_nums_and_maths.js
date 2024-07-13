// Numbers:-

const score = 100;
// console.log(score);

// const balance = new Number(score); // it gives an number object on which we can perform differnt methods 
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // we give a integer as arguement in this which will show the number of decimal point  after the given variable according to the number specified  
// we use to show precison .
// const otherNumber = 23.95;
// console.log(otherNumber.toPrecision(3));  // it's used to round off to the number of digits you provide

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));  // used to convert the way number is written in different countries.
// console.log(hundreds.toLocaleString());  // used to convert the way number is written in different countries.


// *********  Maths  ******
/*
console.log(Math);  // it retruns an object which constains all the methods of math function.
console.log(Math.PI);  // prints the value of PI

console.log(Math.abs(-4)); // this method is used to change negative value to positive.

console.log(Math.round(3.5)); // it rounds of the value according to the decimal point after .

console.log(Math.ceil(4.2));  // it always round of the upper value even if the value after decimal point is 1 as is in this case the return value would be 5
// even if we go one point up from the value it will round off it to +1 value.

console.log(Math.floor(4.9)); //complete opposite of ceil.

*/

console.log(Math.min(4,3,6,67,89));
console.log(Math.max(4,3,6,67,89));


// we will mostly use this math method -->
console.log(Math.random());  // it always gives us random value between 0 and 1 
console.log(Math.random()*10); // if we want value between 1 and 10 
console.log((Math.random()*10) + 1); // because the value of random lies between 1 and 0. it is possible that the value can come like this 0.02343 so in this case by multiplying it with ten will still give us 0 so it can go out of bound when i want to limit random number between 1 to 10 or any number so we add 1 to the solution to avoid such scenario.
console.log(Math.floor((Math.random()*10) + 1));  // to get the lower value.

// when we have to define min and max in our code -->
const MIN = 10;
const MAX = 20;
console.log(Math.floor((Math.random()*(MAX-MIN +1)) + MIN )); 