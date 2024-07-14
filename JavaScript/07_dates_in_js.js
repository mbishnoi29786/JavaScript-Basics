// Dates -->

// let myDate = new Date();  // Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
// console.log(myDate);
// console.log(typeof(myDate));

// console.log(myDate.toString());

// Constructor function for creating User objects
/*
function User(name, email) {
    this.name = name;
    this.email = email;
    this.registeredAt = new Date(); // Capture registration timestamp
}

// Creating instances using the constructor
let user1 = new User('Alice', 'alice@example.com');
let user2 = new User('Bob', 'bob@example.com');

console.log(user1);
console.log(user2);
*/

// Function for registering a user
function registerUser(name, email) {
    let registeredAt = new Date(); // Capture registration timestamp
    return {
        name: name,
        email: email,
        registeredAt: registeredAt
    };
}

// Registering users using the function
let user1 = registerUser('Alice', 'alice@example.com');
let user2 = registerUser('Bob', 'bob@example.com');

console.log(user1);
console.log(user2);

// both the approaches are good to go with it all depends on personal preference