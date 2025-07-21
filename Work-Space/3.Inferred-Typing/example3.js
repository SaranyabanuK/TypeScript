var name = "Saranya"; // inferred as string
var age = 22; // inferred as number
var isStudent = true; // inferred as boolean
name = 100; // Error: Type 'number' is not assignable to type 'string'
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
