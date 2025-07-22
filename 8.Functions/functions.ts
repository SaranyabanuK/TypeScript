// Function with type annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Saranya")); 

// Function with optional parameter
function multiply(a: number, b?: number): number {
    return b ? a * b : a * 2;
}
console.log(multiply(5));      
console.log(multiply(5, 3));    

// Arrow function
const add = (x: number, y: number): number => x + y;
console.log(add(7, 8)); 

// Function with default parameter
function welcome(message: string = "Hi there!"): void {
    console.log(message);
}
welcome(); 
welcome("Welcome to TypeScript!"); 
