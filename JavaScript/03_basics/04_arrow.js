let user =
{
    username: "Hello",
    email: "hello@example.com",
    welcomeMessage : function() {
        console.log(`${this.username}, world!`);
        console.log(this);
    }
}

// user.welcomeMessage();

user.username = "Bye";
// user.welcomeMessage();
// console.log(this);

function hello ()
{
    let username = "hello"
    // console.log(this.username); // this will print undefined. this only works in object context 
    // console.log(this); // this will print the function properties
}

hello();

let hello1  = () => {
    return "hello World";  // when we use return it called explicit return
}

// implicit return -->
let world = () => "hello, World 2"  // if we are return something in the same line then we don't need to write return.

// we can also use () to wrap our content in 2nd case. by using () we don't need to explicitly write return. which is quite used in react.
// if we use {} then we need to write return explicitly.

// the  2nd case is useful when we have return object in same line because we write object using {}

let example = () => ({example : "hello, World!"});

console.log(hello1());
console.log(world());
console.log(example());
