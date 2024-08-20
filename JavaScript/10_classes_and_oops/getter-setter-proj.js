// Secure User Authentication System

// Problem : building a user authentication system where we need to manage sensitive information like passwords. You want to ensure that passwords are never exposed in their raw form and that they are securely stored and retrieved

// Solution: we can use JavaScript's property descriptors and getters/setters to manage how passwords are handled within our system. This approach allows us to control the visibility and transformation of sensitive data.

class SecureUser
{
    constructor(username, password)
    {
        this._username = username;
        this.password = password; // Store raw password internally
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
        return '*******';  // Masked Password
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