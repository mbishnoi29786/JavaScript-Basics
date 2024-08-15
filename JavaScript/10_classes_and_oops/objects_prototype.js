// the concept of "prototype" is central to its object-oriented programming model. It refers to the mechanism by which objects inherit properties and methods from other objects.

// what is a prototype?
// In JavaScript, every object has a property called prototype. The prototype is itself an object, and it can have properties and methods. When you try to access a property or method of an object, JavaScript first looks for that property or method in the object itself. If it doesn’t find it there, JavaScript looks up the prototype chain, which is a chain of prototypes linked together.


// Prototype Chain
// The prototype chain is a series of objects that are linked together. Here’s a basic idea of how it works:

// Object Creation: When you create an object using a constructor function or class, that object inherits from the prototype of its constructor function.
// Property Lookup: If you access a property or method on an object and it's not found on the object itself, JavaScript looks at the object’s prototype. If the property is not found there, it looks at the prototype’s prototype, and so on, until it reaches Object.prototype, which is the end of the chain.

function Person(name) 
{
    this.name = name;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
console.log(`Hello, my name is ${this.name}`);
};

const manish = new Person('Manish');
manish.greet(); // Output: Hello, my name is Manish


// Person.prototype is an object that contains methods or properties shared by all instances of Person.
// When you call manish.greet(), JavaScript first looks for greet on alice. It doesn’t find it there, so it looks up the prototype chain to Person.prototype, where it finds the greet method.

// Object.create() and Prototype

const animal = 
{
    speak: function() 
    {
        console.log('Animal speaks');
    }
};

const dog = Object.create(animal);
dog.speak(); // Output: Animal speaks

// Here, dog is created with animal as its prototype. Thus, dog inherits the speak method from animal



// Class Syntax
// In modern JavaScript (ES6+), you can use the class syntax, which is syntactic sugar over the traditional prototype-based approach but works in the same way under the hood.

class Person 
{
    constructor(name) 
    {
        this.name = name;
    }

    greet() 
    {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const manish1 = new Person('Manish');
manish1.greet(); // Output: Hello, my name is Manish


// Prototype: An object from which other objects inherit properties and methods.
// Prototype Chain: The series of links between objects and their prototypes.
// Constructor Functions: Functions that define the prototype for their instances.
// Object.create(): A method to create an object with a specific prototype.
// Class Syntax: A modern syntax for creating constructor functions and managing prototypes more conveniently.


