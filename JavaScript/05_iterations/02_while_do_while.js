// while and do while are used when we don't know the exact point to terminate the loop 
// when we are sure that till which point we need to run the loop for loop is useful.

// while loop   -->

let a = 10;
let b = 20;

while (b > a) {  // run till the condition is true
    console.log(`value of ${a} and ${b}`);
    b--;
    a++
}

// do while 
// do while is useful when we want our condition to run at least once regardless of the condition. and then it will check the condition if the condition is true the loop will keeps on running until the condition is true.

let x  = 10;

do {
    console.log(`this condition will run atlease once.`);
} while (x > 11);
