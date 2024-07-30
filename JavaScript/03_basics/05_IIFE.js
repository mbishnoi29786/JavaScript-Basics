// IIFE --> Immediately Invoked Function Expression -->
// An IIFE is a function that is defined and then immediately executed. It’s defined within a pair of parentheses () and then invoked with another set of parentheses (). 

// syntax -->
(function hello () {
    console.log("hello, World!");
})();

// to create an IIFE we wrap the function in paranthesis to turn into an function expression. the outer paranthesis (function hello () {console.log("hello, world");}) indicate that it's a function expression, not a function declaration. 

// the second pair of paranthesis () at the end of the function expression immediately invoke the function, causing it to execute right away.

// in the code i have above written 
// function hello () {} --> is the function expression
// the entire (function hello() {} ) --> is the IIFE.
// the trailing () calls the function immediately, so the hello world is logged to the console.


// IIFE using an arrow function -->
(()=> console.log("Hello, world 1"))();  // simple IIFE

let abc = (function abc(){   // named IIFE
    console.log("Hello, abc!");
    return console.log(0);
})();

// uses of IIFE -->
// 1. Encapsulation -- An IIFE creates a new scope for variables. This helps in preventing variables from leaking into the global scope, which can prevent conflicts and bugs.
(function() {
    var privateVar = "I'm private";
    console.log(privateVar);
})();
// console.log(privateVar); // Error: privateVar is not defined

// 2. Module Pattern: IIFEs are often used to create modules. They allow you to define variables and functions in a local scope and expose only what you want through a return statement.
var myModule = (function() {
    var privateVar = "I'm private";
    
    return {
        publicVar: "I'm public",
        getPrivateVar: function() {
            return privateVar;
        }
    };
})();
console.log(myModule.publicVar); // "I'm public"
console.log(myModule.getPrivateVar()); // "I'm private"

// in this the variables can be used out of the scope because we used return state to expose them to outer scope

// 3. Avoid Global Variables: By using an IIFE, we can avoid polluting the global namespace with variables that are only needed temporarily.

// 4. Initialization Code: Sometimes we want to run code as soon as the script loads but without affecting the rest of our code. An IIFE is a good place for that kind of code.

//  if we want to pass a arguement in IIFE

((name)=> console.log(`hello, ${name}`))("Manish");

((name) => console.log(`How's You, ${name}`))("Manish")
// we always have to put a semicolon at the end of the program because the js does not know where till where the code needs to run immidiately and give us the error 
// TypeError: (intermediate value)(...) is not a function