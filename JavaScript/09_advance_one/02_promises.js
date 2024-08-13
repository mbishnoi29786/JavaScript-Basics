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

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({User: 'hello, World', email: 'helloWorld@example.com'});
    }, 1000);
})

// the parameter we pass in the resolve can be accessed in then
promiseThree.then((user)=>
{
    console.log(user);
    console.log("Promise 3 resolved");
    
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error)
        {
            resolve({name: 'hello, World', email: 'helloWorld@example.com'});
        }
        else
        {
            reject('ERROR: Something Went Worng')
        }
    }, 1000);
})

// promise chaining
promiseFour
.then((user)=>{
    console.log(user);
    return user.name; // return is used to pass the value to next then statement 
})
.then((userName)=>{
    console.log(userName); // this will print the hello,World 
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('the promise is either resolved or rejected'); // this will run guranteed evn if the upper ones will run or not
})


// using async await -->
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error)
        {
            resolve({name: 'async await', email: 'asyncAwait@example.com'});
        }
        else
        {
            reject('ERROR: Something Went Wrong in 5th Promise')
        }
    }, 1000);
})

// in async await we need to use try catch block to handle the resolve, reject state
async function consumePromiseFive() {
    try 
    {
        const response = await promiseFive;
        console.log(response);
    } 
    catch (error) 
    {
        console.log(error);
    }
}

consumePromiseFive();


// using an api request -->
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}

getAllUsers();