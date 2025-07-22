// Number array
var numbers = [1, 2, 3, 4];
numbers.push(5);
console.log("Numbers:", numbers);
// String array
var fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log("Fruits:", fruits);
var pets = [
    { name: "Milo", type: "Cat" },
    { name: "Delmio", type: "Dog" }
];
pets.push({ name: "Coco", type: "Parrot" });
pets.forEach(function (pet) {
    console.log("".concat(pet.name, " is a ").concat(pet.type));
});
