// Promises --> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

fetch('https://www.example.com/').then().catch().finally();
// the response comes in .then()
// if an error comes the catch will catch it
// and if anuthing else came up it will come in finally and it will run no metter what means it is guranteed to run

// to consume promises we need to first learn not to consume promises but how to make them

// promises -->

const promiseOne = new Promise((resolve, reject) =>{
    // Do an async Task
    // DB Calls, cryptography, network
    setTimeout(() => {
        console.log("Async Task is Complete");
        resolve();
    }, 1000)
})

// resolve have direct connection with then 
promiseOne.then(()=>{
    console.log("Promise Consumed");
})

// without using an variable

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async 2 is complete");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Promise 2 Consumed.");
    
})