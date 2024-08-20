function User(email, password)
{
    this._email = email,
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function()
        {
            return this._email.toUpperCase();
        },
        set: function(value)
        {
            return this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function()
        {
            return '*******';
        },
        set: function(value)
        {
            return this._password = value.split('').reverse().join('');
        }
    })
}

const user1 = new User("manish@example.com", 'Manish'); 
console.log(user1); // Output : User { _email: 'manish@example.com', _password: 'Manish' }
console.log(`Email: ${user1.email} Password: ${user1.password}`); // Output: Email: MANISH@EXAMPLE.COM Password: *******
