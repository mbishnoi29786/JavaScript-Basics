// When we create a class with get and set methods,  we override the default behavior of property access

class User
{
    constructor(email, username)
    {
        this._email = email,
        this._username = username
    }

    // Custom getter for email
    get email()
    {
        
        return this._email.toUpperCase(); // Read operation
    }

    // Custom setter for email
    set email(value)
    {
        this._email = value.toUpperCase(); // Write operation
    }

    // Custom getter for username
    get username()
    {
        return this._username.toUpperCase(); // Read operation
    }
    // Custom setter for email
    set username(value)
    {
        this._username = value.toUpperCase(); // Write operation
    }
}

const user1 = new User('manish@example.com', 'Manish');
console.log(`Email: ${user1.email} Username: ${user1.username}`);


// Notes:
// Default Getter and Setter Behavior:
// When we create a class with get and set methods, they don’t automatically use default behavior. Instead, if we define these methods, we override the default behavior of property access.
// Avoiding Recursion with Getters and Setters:
// In my class, the following issues occur:

// Recursion Issue: If you use this.email or this.username inside the getter or setter for email and username, it will call the getter or setter recursively, leading to a "Maximum call stack size exceeded" error.
// Correct Approach: You need to use a different internal property (e.g., _email, _username) to store values and avoid the recursion.


// Getter Setter Read Write Operations: 
// In JavaScript, getters and setters allow us to control how properties are accessed and modified. These operations are crucial for encapsulating and managing data within our objects.

// Read Operation

// The read operation is handled by a getter. When we access a property of an object that has a getter defined, JavaScript calls this getter function to determine what value should be returned.

// Write Operation

// The write operation is handled by a setter. When you assign a value to a property of an object that has a setter defined, JavaScript calls this setter function to handle the value assignment.
