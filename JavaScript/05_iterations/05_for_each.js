// forEach  loop -->

// The forEach loop is a method in JavaScript that is used to execute a provided function once for each array element. It is a convenient way to iterate over arrays without needing to manage the loop's index manually.

// syntax --> 

// let array = ['a', 'b', 'c', 'd', 'f'];
// array.forEach(function(currentValue, index, array) {
//     console.log(`Current Value: ${currentValue} and Index: ${index} and Array: ${array}`);
// }, thisArg);

/*
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach is being applied to.
thisArg (optional): A value to use as this when executing the callback.
*/


// Using Index and Array Parameters -->
const fruits = ['apple', 'banana', 'mango'];

// fruits.forEach(function(fruit, index, array) {
//     console.log(`Index: ${index}, Fruit: ${fruit}, Array: ${array}`);
// });

// Using thisArg -->

const context = {prefix: 'Fruit: '};

// fruits.forEach(function(fruit) {
//   console.log(this.prefix + fruit);
// }, context);

// Arrow Functions with forEach -->
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));

/*
Important Points -->

Non-returnable: The forEach method does not return a new array or a result. It is used for its side effects, such as modifying each element or performing operations that do not require a return value.

Break and Continue: Unlike for loops, forEach does not support the use of break or continue statements to terminate the loop early or skip iterations. If you need this functionality, consider using for, for...of, or Array.prototype.some()/Array.prototype.every().

Asynchronous Callbacks: forEach does not handle asynchronous operations in the way you might expect. The loop does not wait for promises or asynchronous operations to complete. If you need to handle asynchronous code, use a different approach, such as a for...of loop with await.

*/