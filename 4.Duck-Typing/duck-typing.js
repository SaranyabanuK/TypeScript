function greet(person) {
    console.log("Hello, ".concat(person.name, ". You are ").concat(person.age, " years old."));
}
var user = {
    name: "Saranya",
    age: 22,
    hobby: "Coding", // Extra property (ignored)
};
greet(user); // This works because 'user' has all required properties of Person
