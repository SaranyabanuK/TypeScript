var Animal = /** @class */ (function () {
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " says ").concat(this.sound));
    };
    return Animal;
}());
var cat = new Animal("Kitty", "Meow");
cat.makeSound();
var dog = new Animal("Puppy", "Woof");
dog.makeSound();
