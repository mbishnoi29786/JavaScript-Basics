// when  we make our real world website if we are unsure how many arguements are going to comein a function then we a REST operator
// when we use ...parameter it means here  ... acts as a rest operator

function calculateCartPrice(...item)
{
    return item
}

// console.log(calculateCartPrice(100, 200, 300));  // this will return an array of all the item values

function calculateCartPrice1(value1, value2, ...item)
{
    return item
}

// console.log(calculateCartPrice1(100, 200, 300, 400, 500 ));  // this will return an array of leaving first two values because that are assigned to first to parameters
// because we did not returned those values we will only get an array that contain 300, 400, 500.


// how we handle objects as an arguement -->

function handleObject(obj1)
{
    console.log(`Obj one is " ${obj1} " and this is how we accessed the value of a key " ${obj1.name} " of object`);
}

let anyObj = 
{
    name : "Obj1",
    otherName: "hello, World"
}

// handleObject(anyObj);  // the obj1 name is going to be represented in [object object ] form

// we can simple pass object in the parameter

handleObject({name: "hello"})

// passing aaray as an arguement -->
let myNewArray = [100, 200, 300, 400];

function returnSecondValueFromArray(array)
{
    console.log(array[1]);
}

returnSecondValueFromArray(myNewArray); // we can also simply pass array in the arguement