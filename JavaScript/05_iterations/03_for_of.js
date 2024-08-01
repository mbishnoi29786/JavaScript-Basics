// for of loop -->

// The for...of loop is a modern JavaScript loop introduced in ECMAScript 2015 (ES6) that allows you to iterate over iterable objects like arrays, strings, maps, sets, and more. It provides a simpler and more readable way to iterate through elements compared to the traditional for loop.

// syntax -->
// for (variable of iterable) {
//     // code block to be executed
//   }

// variable: A new variable to be assigned to each element of the iterable.
// iterable: An object that has iterable properties, such as an array or a string. 

let numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//     console.log(`${num} of ${numbers}`);  // this will run for every array element
// }

// for of in strings -->

let greetings = "Hello, World!";

// for (const greet of greetings) {
//     console.log(`${greet} of ${greetings}`); // this will run for every string character
// }

// maps --> A Map is a collection of key-value pairs where both keys and values can be of any type.
// A Map remembers the original insertion order of the keys.
// A key in the Map may only occur once; it is unique in the Map's collection.

/*
Methods and Properties

map.set(key, value): Adds a key-value pair to the map.
map.get(key): Returns the value associated with the key.
map.has(key): Returns true if the key exists in the map.
map.delete(key): Removes the key-value pair from the map.
map.clear(): Removes all key-value pairs from the map.
map.size: Returns the number of key-value pairs in the map.
*/

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// console.log(map1.get('a'));
// Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// Expected output: 97

// console.log(map1.size);
// Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// Expected output: 2

// using for of loop on the map -->
// for (const [keys, values] of map1) {
//     console.log(`Key :${keys} Value: ${values}`);
// }

// set --> A Set is a collection of unique values. A value in the Set may only occur once; it is unique in the Set's collection.

/*
Methods and Properties

set.add(value): Adds a value to the set.
set.has(value): Returns true if the value exists in the set.
set.delete(value): Removes the value from the set.
set.clear(): Removes all values from the set.
set.size: Returns the number of values in the set.
*/

const set = new Set([1, 2, 3, 4, 5]);

// set.add(6);
// console.log(set.has(3)); // true
// console.log(set.size); // 6

// for (const value of set) {
//     console.log(`Value: ${value} of Set: ${set.has(value+1)}`);
// }


// iterating over an object using for of loop (it's not recommended generally)

let obj1 = {name : "abc", last : "bbc", age: 21}
// Object prototype has various properties through which we can access any properties of an object

// using Object.keys -->
// for (const key of Object.keys(obj1)) {
//     console.log(`Key : ${key}\nValue : ${obj1[key]} `);
// }

//using Object.values -->
// for (const values of Object.values(obj1)) {
//     console.log(`Values : ${values}`);
// }

// using Object.entries -->
// for (const [keys, values] of Object.entries(obj1)) {
//     console.log(`${keys}: ${values}`);
// }