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

// const anoString = gameName.slice(4, -2);  // sh1 
// console.log(anoString);  // Negative values are allowed here. these value will start from the end. it will give blank answer when it does not find inbetween the given bound


// const newString1 = '    Manish       bishnoi   ' ;
// console.log(newString1.trim());  // it will the white spaces from the start and end of the given string.
// there are other methods in like trimStart() and trimEnd() to remove spaces from start and end
// it does not remove the space inbetween 2 words

// const url = "https://manish.com/manish%20bishnoi/"
// console.log(url.replace('%20', '-'));



// String.prototype.includes() -->
// console.log(url.includes('manish'));  //true
// syntax 
// includes(searchString)
// includes(searchString, position)
/*
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"
*/


// String.prototype.split() -->
// const aVaribale = 'Hello World How is you? ';
// console.log(aVaribale.split(' '));  // it splits the given string according to the value provided. it returns an array.

// const str1 = "Hello";
// const str2 = "World";
// console.log(str2.concat(',  ',str1));  // used to concat 2 or n number of trings together. this function can only be used on string and the result will also be a string.


// String.prototype.endsWith()
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

/*
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.length)
console.log(str1.endsWith('best', 17));  // we can enter the ending index or position where we want to check
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false
*/


let str1 = 'The quick brown fox jumps over the Lazy dog.';
// console.log(str1.length);
// console.log(str1.at(5)); // takes negative as well as positive values. negatives starts from end. takes integer as an input.
// console.log(str1.charAt(5)); // same as str1.at(). is supported widly because it was introduced earlier in ECMA while at is newly released in 2021 and as of mid 2024 it is not supported by most browsers.

// console.log(str1.endsWith('dog', 43));   // the second parameter tells at which point we want i considert ends.

// console.log(str1.search(/the/i)); // Case insensitive search using regex. returns the index of first char where it found the entered string. the every word of the string must be present otherwise it will give -1. 
// In JavaScript, the search() method is used to search for a substring within a string and returns the position of the first occurrence of the specified substring, or -1 if the substring is not found. It is similar to the indexOf() method, but it can also accept a regular expression as its parameter.

// console.log(str1.indexOf('The'));  // same as search method but we cannot use regression expression in it. to use it case insenstively we can use toUpperCase or toLowerCase.

// console.log(str1.toLowerCase().includes('lazy')); // it returns true if the string is found and false if not found.
// includes --> case sensitive and does not support regression exp

// console.log(str1.match(/[a-z]/));  // The match() method of String values retrieves the result of matching this string against a regular expression.

console.log(str1.repeat(1).split(('.')));  // the split() method is used to divide a string into an array of substrings based on a specified separator.
// syntax --> string.split(separator, limit); 
// example 2->
/*
const str = "apple,banana,orange,grape";
const result = str.split(",", 2);

console.log(result); // Output: ["apple", "banana"] 
*/
// The split() method returns a new array containing the substrings, created by splitting the original string at each occurrence of the separator.
// Important Points:
// The split() method does not modify the original string.
// If the separator is an empty string (""), the string will be split between each character.