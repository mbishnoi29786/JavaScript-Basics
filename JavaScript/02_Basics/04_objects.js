// const tinderUser = new Object();  // this will create asingleton object

const newUser = {};

newUser.name = "hello";
newUser.lastName = "World";
newUser.email = "abc@example.com";

const regularUser = {};

regularUser.name = "hello1";
regularUser.lastName = "World1";
newUser.email = "abc1@example.com";

newUser.regularUser = regularUser;

// console.log(newUser?.regularUser?.newBoy);

const hello = {a: 1, b:2};
const world = {c:3, d:4};

const mixed = Object.assign({}, hello, world); // this will create a new object {} in this by combining hello and world object

// console.log(hello);  if we don't write  {} then all the values will be added to hello means it would have made the change in actual object

// console.log(mixed);

// one more method to join two objects --> same as array -->
const mixed1 = {...hello, ...world};
// console.log(mixed1);


// when we retrieve data from the database it returns us an array like this -->

const dataFromDatabase = [
    {
        name : "jai",
        email: "jai123@example.com"
    },
    {
        name : "kai",
        email: "kai123@example.com"
    },
    {
        name : "mai",
        email: "mai123@example.com"
    }
]

// if we want to access the information we simply use it like this -->
console.log(dataFromDatabase[0].name);

// we can also access all the keys or values of an abject -->
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));

// this one is different --> 
// console.log(Object.entries(newUser));  // this one will create the array of key and values of an object while returning an array

// if we want to ask in an object that it has some property or not -->

console.log(newUser.hasOwnProperty("name"));  // it will return true or false based on the query
