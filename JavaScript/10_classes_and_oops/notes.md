# javascript and classes
# oop

* OOP, or Object-Oriented Programming, is a programming paradigm that organizes software design around objects, rather than functions or logic. *


# object
- collection of properties and methods

# why we use OOPS

# parts of OOPS
- object literal

- constructor function
- Prototypes
- Classes
- Instances (new , this)


# 4 pillars 
- Abstraction
- Encapsulation
- Inhertance
- Polymorphism


# oop example

``` Javascript

// Class definition
class Animal {
    constructor(name) {
        this.name = name; // Encapsulation of the 'name' attribute
    }

    // Abstraction: Method to be implemented by subclasses
    speak() {
        throw new Error("Subclasses must implement this method");
    }
}

// Inheritance
class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow!";
    }
}

// Polymorphism: Function that accepts any object of type Animal
function makeAnimalSpeak(animal) {
    console.log(animal.speak());
}

// Creating objects
const dog = new Dog("Rover");
const cat = new Cat("Whiskers");

// Using polymorphism to call the speak method
makeAnimalSpeak(dog);  // Output: Woof!
makeAnimalSpeak(cat);  // Output: Meow!

```

``` txt

Breakdown of the Example:

Encapsulation:

In the Animal class, the name property is encapsulated within the class. It's set through the constructor and can be accessed through instance methods, but it’s not directly exposed.

Inheritance:

The Dog and Cat classes extend the Animal class, inheriting its properties and methods. They provide their specific implementations of the speak method.

Polymorphism:

The makeAnimalSpeak function can accept any object that is an instance of Animal. It calls the speak method on the object, and the appropriate method (from Dog or Cat) is executed based on the actual object type.

Abstraction:

The speak method in the Animal class is an abstract method. It’s defined but not implemented in Animal, and it must be implemented in any subclass (Dog and Cat) that extends Animal.

```