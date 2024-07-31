//switch -->
// using break is necessary if not used than when first true condition found it will run all the cases.

let a = 10;

// one way --> 
switch(true)  // it will run till first true condition found and runs only till that case
{
    case (a < 10 ):
        console.log("runs 1st the condition is true");
        break;
    case (a > 10 ):
        console.log("runs 2nd the condition is true");
        break;
    case (a == 10 ):
        console.log("runs 3rd the condition is true");
        break;
    default:
        console.log("runs if none of the above condition is not true");
}


switch (a > 10) {
    case true:
        console.log("2nd way: runs if the condition is true");
        break;
    case false:
        console.log("2nd Way: runs if the condition is false");
        break;
    default:
        break;
}