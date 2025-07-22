function sealed(constructor: Function & { name: string }) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(`Sealed the constructor: ${constructor.name}`);
}

@sealed
class Person {
    constructor(public name: string) {}
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const p = new Person("Saranya");
p.greet();
