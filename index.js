console.log("Hello World");
// let name = "Adele";
// let age = 30;
// let isApproved = true;
// let firstName = undefined;
// let selectedColor = null;

let person =
{
    name: "elvoska",
    age: 30
}

//To access person object 
//V1 Dot notation
person.name = "Alexandria";
person.age = 45;
//V2 Bracket Notation
let variableName = "name";
person[variableName] = "rene";
person["age"] = 50;
console.log(person);

let selectedColors = ["red", "black"];
//It is a dynamic array unlike other programming languages
selectedColors[2] = "Green";
selectedColors[2] = 1;

console.log(selectedColors)

//Perform a task
function greet(name, lastName = null)
{
    console.log("Acknowledge Me " + name +" " + lastName);
}

//Calculate a value
function square(number)
{
    return number * number
}

greet("Rasputin", "Harmonzi");

console.log(square(5));
