// Function with default parameters
function greetUser(name: string = "Anonymous", greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greetUser()); 
console.log(greetUser("Saranya")); 
console.log(greetUser("Banu", "Hi")); 
