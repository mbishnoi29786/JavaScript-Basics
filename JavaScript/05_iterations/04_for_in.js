// for in -->

// The for...in loop iterates over the enumerable properties of an object. It is primarily used for iterating over object properties, but it can also be used with arrays, though it's not recommended for arrays because it iterates over property names (indices) rather than values.

// syntax -->
/*
for (variable in object) {
    // code block to be executed
}
*/

// variable: A new variable that will be assigned to the property name (key) of each property.
// object: The object whose enumerable properties are iterated.

const person = {
    name : "Manish",
    lastName : "Bishnoi",
    age : 24
}

// for (const key in person) {
//     console.log(`Key : ${key}\nValue: ${person[key]}`);
// }

// iterate over arrays using for in (not recommended)

let arr = ["a", "b", 'c', 'd', 'e'];

// for (const index in arr) {
//     console.log(` this will return index :${index} and value :${arr[index]}`)
// }