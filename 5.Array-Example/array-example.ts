// Number array
let numbers: number[] = [1, 2, 3, 4];
numbers.push(5);
console.log("Numbers:", numbers);

// String array
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Mango");
console.log("Fruits:", fruits);

// Array of objects
type Pet = {
    name: string;
    type: string;
};

let pets: Pet[] = [
    { name: "Milo", type: "Cat" },
    { name: "Delmio", type: "Dog" }
];

pets.push({ name: "Coco", type: "Parrot" });

pets.forEach(pet => {
    console.log(`${pet.name} is a ${pet.type}`);
});
