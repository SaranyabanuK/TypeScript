class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} barks! Woof!`);
    }
}

const myDog = new Dog("Delmio");
myDog.bark();         
myDog.move(10);       
