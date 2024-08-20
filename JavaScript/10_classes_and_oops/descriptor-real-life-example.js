// Example description:
// Designing a secure web application where certain user details (like userID) should not be altered or enumerated through certain operations.

const user = {
    userID: '123456',
    username: 'hello,World',
    password: 'password123'
};

// Secure the userID property
Object.defineProperty(user, 'userID', {
    writable: false,     // userID cannot be changed
    enumerable: false,   // userID will not show up in iterations or object listings
    configurable: false  // userID cannot be deleted or reconfigured
});

// Iteration will skip userID
for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}
// Output:
// username : hello,World
// password : password123


// userID is protected from modification.
// It is hidden from enumeration to prevent exposure in logs or data exports.
// It remains unchanged and secured, which is crucial for sensitive information.