let name = "Saranya";        // inferred as string
let age = 22;                // inferred as number
let isStudent = true;        // inferred as boolean

 name = 100;               // Error: Type 'number' is not assignable to type 'string'

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
