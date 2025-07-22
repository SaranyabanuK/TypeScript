// Function with default parameters
function greetUser(name, greeting) {
    if (name === void 0) { name = "Anonymous"; }
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetUser());
console.log(greetUser("Saranya"));
console.log(greetUser("Banu", "Hi"));
