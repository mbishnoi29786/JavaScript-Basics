// Least Used method in the industry

const User = {
    _email : 'manish@example.com',
    _password : 'hello,World',

    get email()
    {
        return this._email.toUpperCase();
    },

    set email(value)
    {
        this._email = value;
    }
}

const user1 = Object.create(User);
console.log(user1.email);
