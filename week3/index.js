// index.js

// Defining a function
function EmployeeInfo(name, Salary) {
  console.log("Welcome " + name + ", your monthly Salary is " + Salary);
}

console.log("This is my first program");

var EmpName = "John";
var EmpSalary = 50000;

// Calling the function
EmployeeInfo(EmpName, EmpSalary);

// Arrow Function
const EmpSkills = (skills) => {
  console.log("Expert in " + skills);
};

EmpSkills("Java");

// Importing local modules
const student = require("./StudentInfo");
const person = require("./Person");

// Using StudentInfo module
console.log("Student Name: " + student.getName());
console.log("Campus: " + student.Location());
console.log("DOB: " + student.dob);
console.log("Grade is: " + student.Studentgrade(55));

// Using Person module
const person1 = new person("Jim", 25, "jim@example.com");
console.log("Using Person Module", person1.getPersonInfo());
console.log("Program ended");
