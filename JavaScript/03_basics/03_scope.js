// if we take 3 variables using let var and const

let a = 2;  // this has a local scope  ---> value can be reassigned
const b = 3; // this has a local scope ---> value cannot be reassigned
var c = 4; // this has a global scope  ---> value can be reassigned
d = 5; // a variable can also be declared like this ---> value can be reassigned

/*
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

// {} defines the scope means local varibales declared inside this can not be accesed outside
// while global variables can be declared inside a scope and used outside of this block 

// if we take the same code like this
if(true)
{
    let i = 2;  // this has a local scope
    const j = 3; // this has a local scope
    var k = 4; // this can be accessed outside the block
    l = 5; // because it is a variable type can be accessed outside the block
}

// console.log(i); // this will tell us not defined
// console.log(j); // this will also tell us not defined
console.log(k); // this will print the value if k
console.log(l); // this will print the value of l

// the problem of global variable is that if we use a same variable inside a scope and assign a value the previous value will be overridden so everytime we need to specify new variable which becomes troublesome in cases where a new programmer comes and edit the code and doesnot not that the variable has been declared already and change the value this can cause unexpected behaviour in the code.