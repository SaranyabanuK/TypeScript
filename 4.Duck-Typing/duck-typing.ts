interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}. You are ${person.age} years old.`);
}

const user = {
  name: "Saranya",
  age: 22,
  hobby: "Coding", // Extra property (ignored)
};

greet(user); // This works because 'user' has all required properties of Person
