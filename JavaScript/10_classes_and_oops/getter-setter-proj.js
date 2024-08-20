// Secure User Authentication System

// Problem : building a user authentication system where we need to manage sensitive information like passwords. You want to ensure that passwords are never exposed in their raw form and that they are securely stored and retrieved

// Solution: we can use JavaScript's property descriptors and getters/setters to manage how passwords are handled within our system. This approach allows us to control the visibility and transformation of sensitive data.

class SecureUser
{
    constructor(username, password)
    {
        this._username = username; // Internal storage for username
        this.password = password; // Calls setter to hash and store password
    }

    // Getter for username
    get username()
    {
        return this._username;
    }

    // Setter for username
    set username(value)
    {
        this._username = value;
    }

    // custom getter for password (return masked password for security)
    get password()
    {
        return '********'  // Masked Password
    }
    
    // custom setter for password (hashes password before string)
    set password(value)
    {
        this._password = this.hashPassword(value); // Hash password
    }

    hashPassword(password)
    {
        // Simple hash function, we can replace it with a secure hash function in real applications
        return password.split('').reverse().join('');
    }

    // Method to authenticate user with raw password
    authenticateUser(inputPassword)
    {
        return this._password === this.hashPassword(inputPassword);
    }
}

// Demo input
const secureUser = new SecureUser('Manish', 'Bishnoi');
console.log(`Username: ${secureUser.username}`); // Username: Manish
console.log(`Password: ${secureUser.password}`); // Password: ********

// Authenticate user
console.log(secureUser.authenticateUser('Bishnoi')); // true
console.log(secureUser.authenticateUser('hello,World')); // false


// Main thing to care in this project or the problem i faced infinite recursion.
// Infinite recursion: 
// when working with getters and setters, using the same name for a property and its accessor methods (getter and setter) can lead to issues like infinite recursion. This is why distinguishing between the property name and its backing variable is important.

// Understanding Getters and Setters
// Getters and setters are special methods in JavaScript that allows us to define custom behavior for reading and writing properties. They are used to create computed properties or to control the access and modification of object properties.
