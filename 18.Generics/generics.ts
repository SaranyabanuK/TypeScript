// A generic function to return any type
function identity<T>(value: T): T {
    return value;
}

let output1 = identity<string>("Hello Generics!");
let output2 = identity<number>(42);

console.log(output1); 
console.log(output2); 

// A generic class
class Box<T> {
    contents: T;
    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

const stringBox = new Box<string>("TypeScript");
const numberBox = new Box<number>(123);

console.log(stringBox.getContents()); 
console.log(numberBox.getContents()); 
