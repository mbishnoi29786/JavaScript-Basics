// if else -->

let a = 100;

if (a > 10)
{
    console.log("execute if condition is true");
}
else if (a > 100)
{
    console.log("execute if the conditon is true && the block before it had not run ");
}
else
{
    console.log("execute if all the other conditions re not true");
}


// short hand notation for if -->
if ( a > 99) console.log(a), console.log("we can write multiple logs uisng ,");

// the second method is reduce the readablity of the code and not recommended


// ternery operator -->
// syntax -->
// condition ? true : false
let b = a > 100? 200 : 100;  // it first checks the condition if the condition is true the value on the left side of : will be assigned. if not then the right side value goes in the b.
console.log(b);

// nested if -->
if (a > 10)
{
    if(a < 101)
    {
        console.log("if both are true then this will be printed");
    }
}


// Nullish Coalescing Operator (??) : null undefined

let x = 5 ?? 10; // it assigns the first value to the variable if that value is not null or undefined 
let y = null ?? 10; // if the  first value is null or undefined then it will assign the second value.

console.log(x , y);

// it used when i retrieve data from backend and we are not sure if the value will come null or undefined so we assign one base value and the other is the one coming form database or backend