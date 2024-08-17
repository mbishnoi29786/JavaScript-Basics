function setUserName(userName)
{
    this.userName = userName;
    console.log('called');
}

function createUser (username, email, password)
{
    // this.username =  new setUserName(username); // Output: username: setUserName { userName: 'Manish' }
    setUserName(username); // this doesnot return username as when the context of this function is executed it will be removed from execution context, thus losing the value
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const user1 = new createUser('Manish', 'manish@example.com', 'example');
console.log(user1);