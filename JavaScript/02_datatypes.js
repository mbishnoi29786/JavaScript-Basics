"use strict" // treat all code in js acoording to newer version

// alert( 3+3 )       // this will not work in while using node, it works in browser

// Data Types -->
// 2 types --> 1. Primitive   2. Non-Primitive
// 1. Primitive --> there are 7 premitive data type : 1.Number 2.BigInt 3.String 4.Boolean 5.Null 6.Undefined 7.Symbol
// 2. Non-Primitive --> 1.Object 2.Array 3.Functions

// Null --> The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.

// Symbol --> for uniqueness
/* 
//  for example
let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId); // false
 */


// Stack and Heap type of memory 
// Primitive data types uses stack type and non primitive uses heap memory
// in stack type the copy of the value is provided while in the heap the the reference of the actual value is provided.

let name1 = 'Manish';
let name2 = name1;
name2 = 'Bishnoi';
console.log(name1); // name1 contaions the original value which is not chnaged when the name 2 assigned a new value because the copy was provided
console.log(name2); 

// in case of non primitive and heap data stack
/*
let user1 = {
    name: 'Manish',
    age: 22,
    mail: 'mbishnoi@gmail.com'
}
let user2 = user1;
// console.log(user2);

user2.name = 'Bishnoi';
console.log(user1);
console.log(user2);

let arr1 = ['hlw', 1,2, 'world'];
let arr2 = arr1;
arr2[1] = 'good';
console.log(arr1);
console.log(arr2);

//in both the examples we can see that the reference of the original value was provided to the other variable so when we make changes in one the changes are made on the original oject or array.

*/