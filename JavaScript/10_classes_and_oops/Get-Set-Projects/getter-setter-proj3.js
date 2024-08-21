// Earlier I make classes in which the private properties were accessible to the user which is not good. 
// I need to define private properties which are only for that class only and shouldn't be accessible outside the class

// This project I made to see the usecase for the classes and it's private properties to ensure encapulation.

// Scenario : Social Media User Profiles

// At social media platform, where users create profiles and have the ability to set their display names, usernames, and email addresses. The display name is what other users see, while the system stores data differently for security and privacy reasons.

// Requirements for this project :
// 1. Display name: A user-friendly name that is displayed on the profile and throughout the platform.
// 2.Username: A unique identifier used for logging in and uniquely identifying the user within the system.
// 3.Email Address: Used for communication, account recovery, and notifications.


// Data Storage vs. Display:

// Display Name vs. Username:
// -->Display Name: Manish Bishnoi (visible to other users)
// -->Username: 29bishnoisaab (used for login and unique identification)

// For name i can set it to anything (like ManishBishnoi, Manish etc) but for the Username: 29bishnoisaab -- this should be unique and cannot contain spaces or special characters. The display name is more flexible in terms of formatting and can include spaces or special characters.


// I have stored username and email in lowercase and set validation to keep only alphanumeric and between 3-20 characters as it is a good prctice for database management
// Usernames are often used in URLs, database queries, and indexing, so they need to be standardized and free of special characters.
// By storing email addresses in a normalized format (e.g., all lowercase) and enforcing specific username rules, i ensured consistent handling of user data.


class SocialMediaUserProfile 
{   
    // private fields
    #displayName;
    #username;
    #email;

    constructor(displayName, username, email)
    {
        this.#displayName = displayName;
        this.#username = username.toLowerCase(); 
        this.#email = email.toLowerCase();
    }

    get displayName()
    {
        return this.#displayName;
    }

    set displayName(value)
    {
        this.#displayName = value;
    }

    get username()
    {
        return this.#username;
    }

    set username(value)
    {
        if (this.validateUsername(value))
        {
            return this.#username = value.toLowerCase();
        }
        else
        {
            console.error(`Invalid Username Format`);
        }
    }

    get email()
    {
        return this.#email;
    }

    set email(value)
    {
        if (this.validateEmail(value))
        {
            this.#email = value.toLowerCase();
        }
        else
        {
            console.error(`Invalid Email Format!`);
        }
    }


    // validation set is the username can be alphanumeric and between 3 to 20 characters
    validateUsername(username)
    {
        return /^[a-zA-Z0-9]{3,20}$/.test(username);
    }

    // Simple email validation
    validateEmail()
    {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

}

const user = new SocialMediaUserProfile('Manish Bishnoi', '29bishnoisaab', 'Manish.Bishnoi@example.com');

console.log(`Display Name: ${user.displayName}`); // Output: Manish Bishnoi
console.log(`Username: ${user.username}`); // Output: 29bishnoisaab
console.log(`Email: ${user.email}`); // Output: Manish.Bishnoi@example.com

// console.log(`This will give an error as i am accessing private property : ${user.#displayName}`);  
// SyntaxError: Private field '#displayName' must be declared in an enclosing class

user.displayName = 'Manish';
console.log(`Updated Display Name: ${user.displayName}`); // Output: Manish

// Invalid username
user.username = 'ManishBishnoi!'; // Error: Invalid username format.