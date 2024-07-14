// Comparison Operators --> >= , <= , != , < , >

/*
console.log( 2 > 3);  //false
console.log( 3 < 3);  //false
console.log( 2 >= 3);  //false
console.log( 2 <= 3);  //true
console.log( 2 == 3);  //false
console.log( 2 != 3);  //true
*/


// these examples give us true results in this case but the result in comaparison is not predictable that's why we don't use comaparison operators while having different types of  variables
/*
console.log('2' >1); // true
console.log('02' > 1); // true
*/

// special case 
/*
console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true   --> the reason is the equality check (==) works different than comparison operators (<, >, <=, >=, != )
 // Comparisons convert null to a number, treating it as 0. that's why in 3rd case null >=0 is true and null >0 is false.
 */

//  comparison with undefined 
/*
console.log(undefined > 0);  // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false 
*/


// == vs ===
console.log('2' == 2); // true
console.log('2' === 2); // false --> because it follows strict code and also checks the data type of the varibale are same or not