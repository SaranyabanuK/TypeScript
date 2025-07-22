// Function with type annotations
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Saranya"));
// Function with optional parameter
function multiply(a, b) {
    return b ? a * b : a * 2;
}
console.log(multiply(5));
console.log(multiply(5, 3));
// Arrow function
var add = function (x, y) { return x + y; };
console.log(add(7, 8));
// Function with default parameter
function welcome(message) {
    if (message === void 0) { message = "Hi there!"; }
    console.log(message);
}
welcome();
welcome("Welcome to TypeScript!");
