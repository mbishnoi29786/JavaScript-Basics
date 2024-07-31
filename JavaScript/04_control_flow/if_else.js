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

