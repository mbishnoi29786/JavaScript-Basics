// Numbers:-

const score = 100;
console.log(score);

// const balance = new Number(score); // it gives an number object on which we can perform differnt methods 
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // we give a integer as arguement in this which will show the number of decimal point  after the given variable according to the number specified  
// we use to show precison .
// const otherNumber = 23.95;
// console.log(otherNumber.toPrecision(3));  // it's used to round off to the number of digits you provide

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  // used to convert the way number is written in different countries.
console.log(hundreds.toLocaleString());  // used to convert the way number is written in different countries.