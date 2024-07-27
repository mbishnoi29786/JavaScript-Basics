// singleton --> when we create using constructor only one instacnce of object is created.
// Object.create --> when we create array using this method it creates a singleton object.

// if we create it using any other method it creates multiple instances of an object
let jsUser = 
{
    myName : "Manish",
    age : 24,
    email: "mbishnoi29786@gmail.com",
    lastLoginDays: ["Monday", "Tuesday"]
}

// one way to access the object keys
// console.log(jsUser.lastLoginDays);  // --> Usage: Typically used when the property name is known at development time and is a valid JavaScript identifier.

// other Way to access 
// console.log(jsUser["email"]); // --> Useful when the property name is dynamic, stored in a variable, or when it's not a valid JavaScript identifier (e.g., contains spaces or special characters).

// example --> using first one (using . notation) --> it does not support the symbol accessing
// Define an object with static property names
/*
let person = {
    name: 'manish',
    age: 24,
    email: 'manish@example.com'
};

// Access properties using dot notation
console.log(person.name);   // Output: manish
console.log(person.age);    // Output: 24
console.log(person.email);  // Output: manish@example.com
*/


// example --> using second one (using []) --> it supports the symbol accessing
// Define an object with dynamic and non-standard property names
/*
let user = {
    'first name': 'manish',
    'last name': 'bishnoi',
    'email-address': 'manishbishnoi@example.com'
};

// Access properties using bracket notation
let propertyName = 'email-address';
console.log(user[propertyName]);  // Output: manishbishnoi@example.com

// Another example with a dynamic property name
let key = 'first name';
console.log(user[key]);  // Output: manish
*/

// accessing a symbol in a object -->
const mySym = Symbol("key1");
let myObj =
{
    name: "manish",
    "last name": "bishnoi",
    email: "mbishnoi29786@gmail.com",
    [mySym]: "mykey1"
}

console.log(typeof myObj[mySym]);

// Object.freeze(myObj); // object has been freezed no new changes can be made

// myObj.name = "bishnoi" 


myObj.greetings = function () {
    console.log("hello, World");
    return 0;
}

myObj.greetingsTwo = function () {
    console.log(`hello, World! It's me ${this.name} ${this["last name"]}`);
    return 0;
}

// console.log(myObj.greetings);   // if we call it like this the function will not come it's refernce will
console.log(myObj.greetings()); // in this the actual function runs

console.log(myObj.greetingsTwo());