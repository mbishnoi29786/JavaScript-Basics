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

class Person1
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

const manish1 = new Person1('Manish');
manish1.greet(); // Output: Hello, my name is Manish


// Prototype: An object from which other objects inherit properties and methods.
// Prototype Chain: The series of links between objects and their prototypes.
// Constructor Functions: Functions that define the prototype for their instances.
// Object.create(): A method to create an object with a specific prototype.
// Class Syntax: A modern syntax for creating constructor functions and managing prototypes more conveniently.


// understanding this 
function multiplyBy5 (num)
{   
    this.num = num
    return this.num*5
}

console.log(multiplyBy5.power = 2);
console.log(multiplyBy5.prototype);
console.log(multiplyBy5(4));


// some real world examples 
// loginUser prototype
function loginUser (username, isLogin)
{
    this.username = username;
    this.isLogin = isLogin;
}

// Adding Method to loginUser
loginUser.prototype.setIsLoginTrue = function ()
{
    this.isLogin = true;
}

// Adding method to loginUser 
loginUser.prototype.setIsLoginFalse = function () 
{
    this.isLogin = false;
}

// Adding method to loginUser to check login Status of a user
loginUser.prototype.printLoginStatus = function()
{
    console.log(`User: ${this.username} Login Status: ${this.isLogin}`);
    
}
const user = new loginUser('Manish', false); // new keyword is used to create a new instance of the loginUser
const user1 = new loginUser('Bishnoi', true);
user.setIsLoginTrue();
user.setIsLoginFalse();

console.log(user);
console.log(user1);
console.log(user1.printLoginStatus());



// Let's take example of an Library Management System

// Step 1: Define the Constructor Function
// First, we define a constructor function Book that initializes properties like title and author:

function Book(title, author) 
{
    this.title = title;    // Initialize the book's title
    this.author = author;  // Initialize the book's author
}

// Step 2: Add Common Methods to the Prototype
// Next, we add methods to the Book prototype so that all book instances share these methods. This allows us to perform actions on any book object:

Book.prototype.displayInfo = function() 
{
    console.log(`Title: ${this.title}, Author: ${this.author}`);
};

// Step 3: Create Instances Using new
// We create new book objects using the new keyword. Each new book object will have its own title and author but share the displayInfo method:

const book1 = new Book('1984', 'George Orwell');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');

// Step 4: Use the Instances
// We can now use our book objects and call the methods defined on the prototype:

book1.displayInfo(); // Output: Title: 1984, Author: George Orwell
book2.displayInfo(); // Output: Title: To Kill a Mockingbird, Author: Harper Lee

// Explanation

// Creating the Blueprint
// The Book function acts like a blueprint for creating books. It defines what each book will have: a title and an author.
// When we use new Book('1984', 'George Orwell'), JavaScript creates a new book object with the title "1984" and the author "George Orwell".
// Sharing Common Features
// By adding methods to Book.prototype, we ensure that all books can perform the same actions. For example, the displayInfo method is available to every book object, showing its title and author.
// Creating and Using Books
// When we create book1 and book2 using new, we get two separate book objects with their own data. Both share the displayInfo method, so they can both display their information.