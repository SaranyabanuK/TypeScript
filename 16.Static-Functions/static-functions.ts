class MathUtils {
    static add(a: number, b: number): number {
        return a + b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log("Add: ", MathUtils.add(5, 3));        
console.log("Multiply: ", MathUtils.multiply(4, 6)); 

const utils = new MathUtils(); // Not needed – static methods are called on the class itself
