// Array -->
/*
In JavaScript, an array is a special type of object that is used to store a collection of elements. These elements can be of any type, including numbers, strings, objects, and even other arrays. Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. Arrays provide a convenient way to group and manipulate data sets using a variety of built-in methods.
*/

/*
In JavaScript, some array methods modify the original array (mutative methods), while others do not and instead return a new array or value (non-mutative methods). Here's a breakdown of these methods:
*/

// Methods That Modify the Original Array (Mutative Methods) -->
/*
1. push --> Adds one or more elements to the end of an array and returns the new length of the array.
2. pop --> Removes the last element from an array and returns that element.
3. shift --> Removes the first element from an array and returns that element.
4. unshift --> Adds one or more elements to the beginning of an array and returns the new length of the array.
5. splice  --> Adds, removes, or replaces elements in an array.
6. reverse --> Reverses the order of the elements in an array.
7. sort --> Sorts the elements of an array in place and returns the array.
8. fill --> Fills all the elements in an array with a static value
9. copyWithin --> Copies part of an array to another location within the same array.
*/

// Methods That Do Not Modify the Original Array (Non-Mutative Methods) -->
/*
1. concat --> Merges two or more arrays and returns a new array.
2. slice --> Returns a shallow copy of a portion of an array into a new array object.
3. map --> Creates a new array with the results of calling a provided function on every element in the calling array.
4. filter --> Creates a new array with all elements that pass the test implemented by the provided function.
5. reduce / reduceRight --> Apply a function against an accumulator and each element in the array to reduce it to a single value.
6. find --> Returns the value of the first element in the array that satisfies the provided testing function.
7. findIndex --> Returns the index of the first element in the array that satisfies the provided testing function.
8. every --> Tests whether all elements in the array pass the test implemented by the provided function.
9. some --> Tests whether at least one element in the array passes the test implemented by the provided function.
10. includes --> Determines whether an array includes a certain value among its entries.
11. indexOf / lastIndexOf --> Returns the first (or last) index at which a given element can be found in the array.
12. join --> Joins all elements of an array into a string and returns this string.
13. flat / flatMap --> Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

const myArr = new Array(1,2,3,4);

// myArr.push(2);
// myArr.push(2)
// myArr.pop();
// myArr.pop();
// myArr.unshift(9);
// myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(newArr);

const myn1 = myArr.slice(1,3);
const myn2 = myArr.splice(1,3);

console.log(`My new array 1: ${myn1} and my new array 2: ${myn2} and the original array: ${myArr}`);