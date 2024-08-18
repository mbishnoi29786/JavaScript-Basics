// Online Course Plateform

// Base Class Users
class User 
{
    constructor(username, email)
    {
        this.username = username;
        this.email = email;
    }

    logDetails()
    {
        console.log(`Username: ${this.username} Email: ${this.email}`);
    }
}

// classes that extends User : Instructor , Student
class Instructor extends User
{
    constructor(username, email, bio)
    {
        super(username, email);
        this.bio = bio;
        this.courses = [];
    }

    addCourse(course)
    {
        if(course instanceof Course)
        {
            this.courses.push(course);
        }
        else
        {
            console.log(`Invalid Course ${this.course}`);
        }
    }

    listCourses()
    {
        console.log(` ${this.username} teaches the following courses: `);
        this.courses.forEach((course)=> console.log(course.title));
    }
}

class  Student extends User
{
    constructor(username, email)
    {
        super(username, email);
        this.enrolledCourses = [];
    }

    enrollInCourse(course)
    {
        if (course instanceof Course)
        {
            if (course.addStudent(this))
            {
                this.enrolledCourses.push(course);
                console.log(`${this.username} enrolled in ${course.title}`);
            }
            else
            {
                console.log(`Unable to enroll in ${course.title}`);
            }
        }
        else
        {
            console.log(`Invalid Course!`);
        }
    }

    listEnrolledCourses()
    {
        console.log(`${this.username} is enrolled in following courses:`);
        this.enrolledCourses.forEach(course => console.log(course.title));
    }
}

class Course
{
    constructor(title, description, maxStudents)
    {
        this.title = title;
        this.description = description;
        this.maxStudents = maxStudents;
        this.enrolledStudents = [];
        this.instructor = null;
    }

    setInstructor(instructor)
    {
        if (instructor instanceof Instructor)
        {
            this.instructor = instructor;
        }
        else
        {
            console.log(`Invalid Instructor!`);
        }
    }

    addStudent(student)
    {
        if (this.enrolledStudents.length < this.maxStudents)
        {
            this.enrolledStudents.push(student);
            return true;
        }
        else
        {
            console.log(`Course ${this.title} is full!!`);
        }
    }

    listEnrolledStudents()
    {
        console.log(`Students enrolled in ${this.title}: `);
        this.enrolledStudents.forEach(student => console.log(student.username))
    }
}

// Created user
// Instructors:
const instructor1 = new Instructor ('Dr. Manish', 'manish@example.com', 'Expert In JavaScript Basics!');
const instructor2 = new Instructor ('Dr. Manish Bishnoi', 'manishbishnoi@example.com', 'Expert In JavaScript Advance Concepts!');

// Students:
const student1 = new Student ('Hello', 'hello@emaple.com', 'Graduate');
const student2 = new Student ('World', 'world@example.com', 'Under Graduate');


// Created Courses
const course1 = new Course('JavaScript Basics', 'Introduction to JavaScript', 2);
const course2 = new Course('Advance JavaScript', 'Deep dive into JavaScript', 1);

// Instructors adds Course:
instructor1.addCourse(course1);
instructor2.addCourse(course2);

// Students enroll in courses
student1.enrollInCourse(course1); // Output : Hello enrolled in JavaScript Basics
student2.enrollInCourse(course1); // Output : World enrolled in JavaScript Basics
student1.enrollInCourse(course2); // Output : Hello enrolled in Advance JavaScript
student2.enrollInCourse(course2); // Output : Course Advance JavaScript is full!! && Unable to enroll in Advance JavaScript

// To list the Details:
// Instructor:
instructor1.listCourses(); // Output : Dr. Manish teaches the following courses: && JavaScript Basics
instructor2.listCourses(); // Output : Dr. Manish Bishnoi teaches the following courses: && Advance JavaScript

// Students
student1.listEnrolledCourses(); // Output : Hello is enrolled in following courses: && JavaScript Basics && Advance JavaScript

student2.listEnrolledCourses(); // Output : World is enrolled in following courses: && JavaScript Basics