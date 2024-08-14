// object literal
const user = {
    userName : 'Hello',
    loginCount : 8,
    signedIn : true,
    getUserDetails : function (){
        // console.log('Got the user details from database');
        console.log(this)
    }
}

// console.log(user);
// console.log(user.getUserDetails());

// constructor function -->

// new here is a constructor function, it is used to get a new instance of a without affecting the existing values.
// const promiseOne = new Promise;
// const date = new Date();

// suppose 
function User(username, loginCount, signedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn
    return this
}

// if we don't create a new instance it gives us undefined
const user1 = new User('Hello', 3, true); 
const user2 = new User('World', 4, false); 
console.log(user1 instanceof User); // true
console.log(user2);
