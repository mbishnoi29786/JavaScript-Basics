// for loop -->

// for(let i = 0; i < 10; i++)
// {
//     console.log(`Value of I is : ${i}`);
// }

// nested for 

// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(`Value of i ${i} and j is ${j}`);
//     }
// }

// break and continue   --> they only perform action on the current loop

// break --> it breaks the flow of loop means when a break is encountered in the loop that loop stops working.
// continue --> it skips the iteration means when a continue is encountered the loop skips for that interval.


for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`Value of i ${i} and j is ${j}`);
        for (let k = 0; k < 4; k++) {
            if ( k == 1)
            {
                continue;
            }
            if (k == 3)
            {
                break;
            }
            console.log(`value of i ${i} and j is ${j} and k is ${k}`);
        }
        console.log("Hello");
    }
    console.log("World");
}