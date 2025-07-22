// Define 
interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // optional
}

// Create an object 
const saranya: Person = {
    name: "Saranya",
    age: 22,
    isStudent: true
};

const snape: Person = {
    name: "Snape",
    age: 30
};

console.log(saranya);
console.log(snape);
