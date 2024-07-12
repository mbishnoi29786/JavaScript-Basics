//  Strings --> The String() constructor creates String objects. When called as a function, it returns primitive values of type String.

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

// console.log(gameName.indexOf('n')); // 2   --> if it found the index of the number or char provided it will tell the index number else it will show -1 for all the other number char not found
// if  2 char are provided it will find the first char position and print in the console but the condition is both the number should be present and in sequence. if not then it will show -1.
// it also follows caseSensitivity.

// const newString = gameName.substring(5,1);  // anis
// console.log(newString);   // it gives a substring and thing to take note here is it excludes the last last index provided eg in this the substring is only created till 3 index and the 4 one is excluded.
// we cannot provide negative value to the string if we give it will just start from the index till the second number indicate.
// if we provide the first index bigger than the second it will still takes the lower one as first and the higher one second and create the string in the way it was return i will not reverse it.

// const anoString = gameName.slice(4, -2);  // 23
// console.log(anoString);  // Negative values are allowed here. these value will start from the end. it will give blank answer when it does not find inbetween the given bound


// const newString1 = '    Manish       bishnoi   ' ;
// console.log(newString1.trim());  // it will the white spaces from the start and end of the given string.
// there are other methods in like trimStart() and trimEnd() to remove spaces from start and end
// it does not remove the space inbetween 2 words

const url = "https://manish.com/manish%20bishnoi/"
console.log(url.replace('%20', '-'));

console.log(url.includes('manish'));  //true

const aVaribale = 'Hello World How is you? ';
console.log(aVaribale.split(' '));  // it splits the given string according to the value provided. it returns an array.
