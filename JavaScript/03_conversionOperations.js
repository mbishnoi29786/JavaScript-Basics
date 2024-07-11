
// Number Conversion ->
/* 
let Score = 10;
let Score1 = "abc";
let Score2 = true;
let Score3 = null;
let Score4 = undefined;
let Score5 = 33.33;
// let Score6 = Symbol("id") 

let conversionNumber = Number(Score)
let conversionNumber1 = Number(Score1)
let conversionNumber2 = Number(Score2)
let conversionNumber3 = Number(Score3)
let conversionNumber4 = Number(Score4)
let conversionNumber5 = Number(Score5)
// let conversionNumber6 = Number(Score6)  // --> it shows an TypeError Cannot convert a Symbol value to a number

console.table([ Score, Score1, Score2, Score3, Score4, Score5]);   // --> Actual values
console.table([typeof Score,typeof Score1,typeof Score2,typeof Score3,typeof Score4,typeof Score5]);
console.table([ conversionNumber, conversionNumber1, conversionNumber2, conversionNumber3, conversionNumber4, conversionNumber5]);   // --> After Conversion to number the values
console.table([typeof conversionNumber,typeof conversionNumber1,typeof conversionNumber2,typeof conversionNumber3,typeof conversionNumber4,typeof conversionNumber5]);

*/

/*
    "33" string => 33 Number
    "33abc" string ==> NaN
    Null --> 0
    undefined --> NaN
    true --> 1.  fasle --> 0
*/



// Boolean Conversion

/* 

let isLoggedIn = 1;
let isLoggedIn1 = "";
let isLoggedIn2 = "abc";
let isLoggedIn3 = "00";
let isLoggedIn4 = null;
let isLoggedIn5 = undefined;
let isLoggedIn6 = 2;
let isLoggedIn7 = 11;
let isLoggedIn8 = 0;


let booleanIsLoggedIn = Boolean(isLoggedIn);     // true
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);   // false
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);   // true
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);   // true
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);   // false
let booleanIsLoggedIn5 = Boolean(isLoggedIn5);   // false
let booleanIsLoggedIn6 = Boolean(isLoggedIn6);   // true
let booleanIsLoggedIn7 = Boolean(isLoggedIn7);   // true
let booleanIsLoggedIn8 = Boolean(isLoggedIn8);   // true

console.log("0." + booleanIsLoggedIn);
console.log("1." + booleanIsLoggedIn1);
console.log("2." + booleanIsLoggedIn2);
console.log("3." + booleanIsLoggedIn3);
console.log("4." + booleanIsLoggedIn4);
console.log("5." + booleanIsLoggedIn5);
console.log("6." + booleanIsLoggedIn6);
console.log("7." + booleanIsLoggedIn7);
console.log("8." + booleanIsLoggedIn8);


*/


// String Conversion -->

/* 
let aVar = "33abc";

let strVar = String(aVar)

console.log(strVar);
console.log(typeof strVar);

*/


// it converts everthing to string while keeping the same value 
// Null is going to be null, undefined will be undefined only the type will be converted to string
