//  Strings -->

// const myName = 'Manish';
// const repoCount = 4;
// console.log('My name is ' + myName + ' and my github repository count is ' + repoCount);  // the work will be done in this way too. this way is older and less readable.

// console.log(`My name is  ${myName.toUpperCase()}  and my github repository count is ${repoCount}`); // this one is newer way of doing this. tis makes the code more readable
// it's called as string interpolation. the benefit of doing this is we can do a lot of things on the go like applying a method or function

//  the other way to declare a string -->
const gameName = new String('Manish123');
// console.log(gameName);  // [String : 'Manish123]   --> when we write it in console of the browser it shows different properties of string.
// console.log(gameName.length); // 9
// console.log(gameName.toUpperCase()); // MANISH123
// console.log(gameName);   // [String : 'Manish123]  --> no Value change after toUpperCase as string comes in primitive data tyoes which follows stack memory means it gives only a copy to the variable.
// console.log(gameName.charAt(3)); // i at 3rd index i is there  -->  we give index here on which we want to know the character.
// we cannot give negative values in this we always get nothing.
// when we provide a string in this it always gives the number at index position 
// in case of booleans for true it gives 1 position and false 0

console.log(gameName.indexOf('ni')); // 2   --> if it found the index of the number or char provided it will tell the index number else it will show -1 for all the other number char not found
// if  2 char are provided it will find the first char position and print in the console but the condition is both the number should be present and in sequence. if not then it will show -1.