// Managing User Profiles

// we want to manage user profiles where:

// Usernames should always be stored in uppercase for consistency.
// User email addresses should be validated and stored in a standardized format.

class UserProfile {
    constructor(email, username) {
        this._email = email; // Store email internally
        this._username = username; // Store username internally
    }

    // Getter for email
    get email() {
        // Read operation: Format email before returning it
        return this._email.toLowerCase(); // Return email in lowercase
    }

    // Setter for email
    set email(value) {
        // Write operation: Validate and format email before storing
        if (this.validateEmail(value)) {
            this._email = value.toLowerCase(); // Store email in lowercase
        } else {
            console.error('Invalid email format.');
        }
    }

    // Getter for username
    get username() {
        // Read operation: Return username in uppercase
        return this._username.toUpperCase(); // Return username in uppercase
    }

    // Setter for username
    set username(value) {
        // Write operation: Format username before storing
        this._username = value.toUpperCase(); // Store username in uppercase
    }

    // Method to validate email format
    validateEmail(email) {
        // Simple email validation for this proj
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// Example Usage
const user = new UserProfile('Manish@Example.com', 'Manish');

console.log(`Email: ${user.email}`); // Read operation: Output email in lowercase
console.log(`Username: ${user.username}`); // Read operation: Output username in uppercase

// Update user profile
user.email = 'Manish.Bishnoi@Example.com'; // Write operation: Email validation and formatting
user.username = 'Manish Bishnoi'; // Write operation: Format username to uppercase

console.log(`Updated Email: ${user.email}`); // Read operation: Output updated email in lowercase
console.log(`Updated Username: ${user.username}`); // Read operation: Output updated username in uppercase

// Attempt to set invalid email
user.email = 'manish_bishnoi'; // Write operation: Invalid email format



// Detailed Working
// 1. Constructor:
// Initializes internal properties _email and _username.

// 2. Getters:
//  get email(): When user.email is accessed, it returns the email in lowercase. This allows users to always see email addresses in a standardized format.
//  get username(): When user.username is accessed, it returns the username in uppercase, ensuring consistency.

// 3. Setters:
//  set email(value): When user.email is assigned a value, it first validates the email format using validateEmail(). If valid, it stores the email in lowercase. If invalid, it logs an error.
//  set username(value): When user.username is assigned a value, it converts the value to uppercase before storing it.

// 4. Validation and Formatting:
// Email addresses are validated and standardized before storing.
// Usernames are automatically converted to uppercase to maintain consistency.

// Notes: 
// Getters are used to format or compute the value returned when a property is accessed. They provide a way to control how data is presented.
// Setters are used to validate or transform the value before it is stored. They provide a way to control how data is modified and stored.