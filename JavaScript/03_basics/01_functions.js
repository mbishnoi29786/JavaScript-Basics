// function definition

// js is a language with first class functions which means in this language functions are treated as first class members which means they can be assigned to any veriable just like the other data types

const sayMyName = function () {
    console.log("Manish");
}

// function calling:
// sayMyName();

// functions are a block of code that can be used again by calling it. we can pass various arguement and based on that we can achieve various functionalities.
// for example --> if we have to create a block of code that can performs basic mathmatical function using arguements.

function add(a,b)  // a and b are parameters here 
{
    return console.log(a+b); 
}

// simple calling of a function
// add(3, 4);  // 3 and 4 here known as arguements
// we passed 3 and 4 as arguements so the function will return 7. if we pass a string then it will add both the string.

// when we assign it to new variable -->

function add1(a, b)
{
    console.log(a+b);
    return 0;
}

// let result = add1(4, 4); // by simply assigning a function it will be called once
// console.log(result); // but if we write check the value of result it will show us undefined because we didn't return anything in the function. and that return value is always assigned to the variable.
// if we simply write return and pass any value that value will be assigned to the result variable 

// the code written after the return satement will not be executed.

// we can pass function, string and other data types in the function arguements.
// for eg -->

function userLoggedIn(username)
{
    if(!username) // to handle if the username is not passed
    {
        console.log("Please Enter a Username");
        return 0;
    }
    return `${username} just logged in`;
}

userLoggedIn("Manish"); // this will just call the function but will not orint anything.
console.log(userLoggedIn("Manish")); // this will print the value returned by the funtction
// if we do not pass anything then it will show undefined in place of parameter

// we can also set default value of a parameter by assigning it the value using the assignment operator. the value will be override when an arguement will be passed