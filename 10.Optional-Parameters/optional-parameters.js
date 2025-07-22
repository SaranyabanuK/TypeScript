function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    return "Hello, ".concat(name, "!");
}
console.log(greet("Saranya"));
console.log(greet("Saranya", "Vanakkam"));
