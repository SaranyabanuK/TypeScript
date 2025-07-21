function greet(name) {
    return "Hello, " + name.toUpperCase();
}
console.log(greet("Saranya")); // Works
console.log(greet(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
