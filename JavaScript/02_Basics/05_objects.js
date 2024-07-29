// object destructuring -->

let course = {
    courseName : "abc",
    price: 999,
    courseInstructor: "hello"
}

let {courseName : abc} = course;

console.log(abc);

// in react when we do destructuring like this -->

// let navBar = ({company}) => {

// }

// navBar(company = "abc")

// when we retrieve data from database it gives us data in json format which means it sometimes give as an unnamed object in which both the key and values are in string format except numbers and boolean 
// json --> javaScript Object Notation
// for example -->
// {
//     "name" : "abc",
//     "lastname": "bbc"
// }

// it also sometimes gives an array in which it contains objects 
// for example -->

// [
//     {

//     },
//     {

//     }
// ]

