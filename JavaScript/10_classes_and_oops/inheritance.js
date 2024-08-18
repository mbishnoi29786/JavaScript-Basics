
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

class Teacher extends User
{
    constructor(username, email, subject)
    {
        super(username, email); // Call the parent class constructor
        this.subject = subject;
    }

    teach()
    {
        console.log(`${this.username} is teaching ${this.subject}`);
    }
    
}

class Student extends User
{
    constructor(username, email, grade)
    {
        super(username, email);
        this.grade = grade;
    }

    study()
    {
        console.log(`${this.username} is studying in grade ${this.grade}`);
    }
}

const teacher = new Teacher('Manish', 'manish@example.com');
const student = new Student('Bishnoi', 'bishnoi@example.com');

teacher.logDetails();
teacher.teach();

student.logDetails();
student.study();
