// Dates -->

let myDate = new Date();  // Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
let newDate = Date();  // it returns string
// console.log(myDate);
// console.log(newDate); 
// console.log(typeof(myDate));  // its an object 
// console.log(typeof(newDate)); // it's string 
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2023, 1, 23);  // in this the month start from index 0 so 0 means jan
// console.log(myCreatedDate.toString());

// let myCreateDate1 = new Date("2024-07-14"); // if we are providing it in string the month strts from 1
// console.log(myCreateDate1.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // it will print miliseconds till date from the milliseconds since the midnight at the beginning of January 1, 1970
// to convert it into seconds we multiply it by 1000 and to get value without floating point we use floor function with it.
console.log(Math.floor(myTimeStamp/1000));

let newDate1 = new Date();
newDate1.toLocaleString('default', {
    weekday: 'long',
    hourCycle: 'h12'
})
console.log(newDate1);  // didn't understand completely











// ************ Constructor Vs Functions -->

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
/*
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
*/
// both the approaches are good to go with it all depends on personal preference