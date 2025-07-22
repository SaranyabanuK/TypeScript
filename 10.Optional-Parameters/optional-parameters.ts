function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

console.log(greet("Saranya")); 
console.log(greet("Saranya", "Vanakkam")); 
