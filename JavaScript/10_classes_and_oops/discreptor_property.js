// There are some values or properties which are fixed in JavaScript and the value of them cannot be changed 
// for example --> Math.PI
// console.log(Math.PI); // Output: 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI); // Output: 3.141592653589793


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);


// we can also create such objects whose value are constant, non writable, non enumerable , non configurable
const myDescriptorObj = 
{
    Owner: 'Manish',
    Property : 'Personal PC 1',
    runFunction: function run(){
        console.log(`this will show unexpected result`);
    }
}

//console.log(Object.getOwnPropertyDescriptor(myDescriptorObj, 'Owner')); // here myDescriptorObj is an object and Owner is property. 

Object.defineProperty(myDescriptorObj, 'Owner', 
{
    writable: false, // means you cannot change the value of Owner
    enumerable: false, // we cannot iterate through Owner using loop or Owner will not show up in loops that enumerate properties (like for...in or Object.entries)
    configurable: false  // means the property cannot be deleted or further modified
})

// As enumberable property set to false we cannot iterate through that element
// for (let [key, value] of Object.entries(myDescriptorObj)) {
//     console.log(`${key} : ${value}`); // Output: Property : Personal PC 1
// }


// Output when function is defined and we use loop to iterate using Object.entries
// runFunction : function run(){
//     console.log(`this will show unexpected result`);
// }


// we need to perform a check to remove some unexpected result
for (let [key, value] of Object.entries(myDescriptorObj)) {
    if (typeof value !== 'function')
    {
        console.log(`${key} : ${value}`); // Output: Property : Personal PC 1
    }
}


// Notes :

// Property Descriptors in JavaScript are part of the language’s Object Properties management. They provide a way to control the behavior of properties, such as:

// Whether a property can be changed (writable).
// Whether a property will appear during enumeration (enumerable).
// Whether the property’s attributes can be further modified (configurable).