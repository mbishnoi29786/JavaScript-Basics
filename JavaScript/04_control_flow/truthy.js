// falsy values -->
// false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// truthy values -->
// true, "0", 'false', " ", [], {} , function(){}

const userEmail = "";
const userEmail1 = " abc@example.com";

const array = [];
const object = {};

if(userEmail)
{
    console.log("Empty String is an falsy value.");
}

if(userEmail1)
{
    console.log("Non Empty string is an truthy value.");
}

if(array)
{
    console.log("Empty array is an truthy value.");
}

if(object)
{
    console.log("Empty Object is an truthy value.");
}

// if we want to check an array and object is empty

// for array -->

if(array.length === 0)
{
    console.log("Array is Empty!");
}

// for object -->

// console.log(Object.keys(object));  // retuns an empty array 
if(Object.keys(object).length === 0) // Object.keys(object) returns an array
{
    console.log("Object is Empty");
}

// false == ''  gives true output
// false == 0   gives true output
// 0 == ''      gives true output