class Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }

    makeSound(): void {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const cat = new Animal("Kitty", "Meow");
cat.makeSound(); 

const dog = new Animal("Puppy", "Woof");
dog.makeSound(); 
