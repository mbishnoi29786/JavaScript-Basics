// The Static keyword:

// The static keyword in JavaScript is used to define static methods or properties in a class. Static methods and properties are associated with the class itself rather than with instances of the class. This means you can call static methods and access static properties without needing to create an instance of the class

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method
    static createId() {
        return `123`; // Just an example, normally you might generate a unique ID
    }
}

// Creating an instance of User
const user1 = new User('hello, World!');

// Accessing the static method through the class
console.log(User.createId()); // Output: 123

// Trying to access the static method through an instance will fail
// console.log(user1.createId()); // This will throw an error: user1.createId is not a function

// Note:
// The static keyword in JavaScript defines methods that are associated with the class itself, rather than with instances of the class. This means you can call static methods directly on the class, without needing to create an instance of the class.

