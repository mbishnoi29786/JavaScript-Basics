// Variables --> Let, Const and Var

// Let and Const are introduced in ECMA6 and and both have block Scope.
// Var on the other hand was used in earlier version and support global scope. a variable can be created without using var keyword. it also supports hoisting. Means when a varible is declared it would be treated as if it was declared on the top like functions. it will be loaded in the execution phase. 

// Prac for an Ecommerce Website

const customerId = 1234;    // Value of constant cannot be changed or reassigned. we have to assign the value to the constant while defining it 
let accountEmail = "mbishnoi29786@gmail.com";  // Value can be reassigned of any data type. 
var accountPassword = "12345";  // Value can be reassigned of any data type
accountCity = "Jaipur";  // same as variable
let accountState;

// Assignment :-
// customerId = 2;  // it will give an TypeError that Assignment to constant variable.  
accountEmail = "abc@gmail.com";
accountPassword = "12";
accountCity = "Punjab";

/*
    Prefer Not to use Var because of issue in block scope and functional scope 

*/

console.log(customerId);

console.table([customerId, accountEmail, accountPassword, accountCity, accountState])