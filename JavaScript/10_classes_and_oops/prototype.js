// Prototypes :

// Prototype: An object from which other objects inherit properties and methods.
// Prototype Chain: The series of links between objects and their prototypes.
// Constructor Functions: Functions that define the prototype for their instances.
// Object.create(): A method to create an object with a specific prototype.
// Class Syntax: A modern syntax for creating constructor functions and managing prototypes more conveniently.

// In the last work i created prototype for objects. In this one i'll try creating prototype with string and array -->

// consider  there are a lot of strings coming from database or a form and the user type a string like this
let nameStr = 'Manish   '; // a string with a lot of spaces at the end

// this method will be accessible in all the strings
String.prototype.trueLength = function ()
{
    console.log(`True Length: `, this.trim().length); 
}

nameStr.trueLength();
console.log(nameStr.trim().length); // i can check a stings length like this but how many time i need to write this instead i can create a method protype for string

// for multiple strings 
'Hello   '.trueLength();  // Output: True Length: 5
'World    '.trueLength(); // Output: True Length: 5

// using a variable:-
let str1 = 'Bishnoi   ';
str1.trueLength(); // Output: True Length: 7

// Properties of Objects is accessible to Arrays, Strings and function:
let Anime = ['One Piece', 'Death Note', 'Attack On Titan'];
let name1 = 'Monkey D Luffy';
function demo ()
{
    console.log('hello World');
}

// this method is present in all the Arrays, Strings and Function but the inverse is not true
Object.prototype.isPresent = function ()
{
    console.log('Is Present in ', typeof this );
}

Anime.isPresent();
name1.isPresent();
demo.isPresent();

let demoObj = 
{
    name: 'Manish'
}

// demoObj.trueLength();  // this will give us : there is no such function because the Objects can acces the methods of Array, Functions and String


//Notes Worth noting:
// Assigning new methods Directly to Objects, String and function seems convienent but in can cause Prototype Pollution.


// Global Impact: Extending native prototypes affects all instances of that type. While this can be convenient, it can also lead to conflicts or unexpected behavior if other code relies on the default behavior or if there are naming collisions.

// Prototype Pollution: Adding methods to built-in prototypes can lead to prototype pollution, where unintended modifications affect all instances of that type globally. This can be problematic, especially in larger codebases or libraries.

// Object Prototype Methods: Adding methods to Object.prototype will affect all objects, which is usually not recommended unless you are very certain about the implications. It can interfere with other code or libraries that rely on the default behavior of objects.

// Testing and Compatibility: When extending prototypes, make sure to test thoroughly to ensure that your changes do not break existing code or third-party libraries. Consider using other methods, like utility functions or classes, to avoid potential issues.


// Without Polluting Global Sapce
// Real life Example : Library Management System:
// Define a utility method for arrays
Array.prototype.findByTitle = function (title) {
    return this.find(item => item.title.toLowerCase() === title.toLowerCase());
};
// Define a utility method for strings
String.prototype.isCaseInsensitiveMatch = function (searchString) {
    return this.toLowerCase().includes(searchString.toLowerCase());
};

// Example library items
const libraryItems = [
    { title: 'The Great Gatsby', type: 'book' },
    { title: 'National Geographic', type: 'magazine' },
    { title: 'To Kill a Mockingbird', type: 'book' }
];

// Example search
const searchQuery = 'great';
const title = 'The Great Gatsby';

// Use the new method
const foundItem = libraryItems.findByTitle('National Geographic');
console.log(foundItem); // Output: { title: 'National Geographic', type: 'magazine' }
console.log(title.isCaseInsensitiveMatch(searchQuery)); // Output: true

// Notes:
// By adding methods to prototypes, We can enhance the functionality of built-in objects in a controlled manner. However, to avoid global pollution and unintended side effects:

// 1. Use naming conventions to avoid conflicts.
// 2. Consider using ES6 classes or composition patterns to encapsulate functionality.
// 3. Prefer utility functions or libraries to modify built-in objects.


// __proto__ property of Object

// __proto__ is a property that allows us to access or modify an object's prototype. It provides a way to interact with the internal prototype chain of an object.

// Understanding __proto__:

// 1. Prototype Chain:
// --> In JavaScript, each object has a hidden internal property called [[Prototype]] (often accessible through Object.getPrototypeOf()), which refers to another object. This creates a prototype chain used for inheritance.
// --> __proto__ is a non-standard way to directly access or modify this [[Prototype]] property.

// Accessing Prototypes:
// we can use __proto__ to get or set an object's prototype.
// Example: Accessing and Modifying Prototypes
const animal = {
    species: 'Unknown',
    speak() {
        console.log(`I am a ${this.species}`);
    }
};

const dog = {
    breed: 'Labrador'
};

// Set dog’s prototype to animal
dog.__proto__ = animal;

dog.speak(); // Output: I am a Unknown
console.log(dog.species); // Output: Unknown

// In this example, dog inherits from animal, so it has access to the speak method and the species property defined on animal.

// Use Cases for __proto__

// Prototype Inheritance:
// You can use __proto__ to set up inheritance between objects. This can be useful in prototypal inheritance scenarios where you want to create an object that inherits from another.

// Debugging and Exploration:
// __proto__ can be useful for inspecting the prototype chain during debugging or exploration to understand the inheritance hierarchy of objects.

// Important Considerations
// Non-Standard and Deprecated:
// __proto__ is non-standard and deprecated. Its use is discouraged in favor of standard methods like Object.getPrototypeOf() and Object.setPrototypeOf().

// Standard methods for accessing and setting prototypes
const animal1 = {
    species: 'Unknown',
    speak() {
        console.log(`I am a ${this.species}`);
    }
};

const dog = {
    breed: 'Labrador'
};

// Set dog’s prototype to animal using standard method
Object.setPrototypeOf(dog, animal1);

dog.speak(); // Output: I am a Unknown
console.log(dog.species); // Output: Unknown

// Performance Concerns:
// Modifying the prototype chain using __proto__ or Object.setPrototypeOf() can be slow and is generally considered bad practice for performance reasons. It’s better to set up prototypes at the time of object creation using constructors or classes.
// Inheritance and Object Creation:
// Modern JavaScript encourages using constructor functions, ES6 classes, or Object.create() for setting up prototypes and inheritance, rather than manipulating __proto__ directly.

// Notes:
// __proto__: A non-standard property used to access or modify an object's prototype.
// Use Cases: It can be used for prototypal inheritance and debugging, but its use is discouraged.
// Standard Alternatives: Prefer using Object.getPrototypeOf() and Object.setPrototypeOf() for interacting with object prototypes.
// Modern Practices: Use constructor functions, ES6 classes, or Object.create() for more reliable and performant prototype management.
