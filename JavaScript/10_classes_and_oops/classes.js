// classes are introduced in js after ES6

// the same functionality can also be achieved by prototypes.

class User 
{
    constructor(username, email, password)
    {
        this.username = username,
        this.email  = email,
        this.password = password
    }

    encryptPassword()
    {
        return `hello,${this.password}World`;
    }
    changeUserNameCaseToUpper()
    {
        return this.username.toUpperCase();
    }
}

const user1 = new User('Manish', 'Manish@example.com', 'abc');
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUserNameCaseToUpper());

