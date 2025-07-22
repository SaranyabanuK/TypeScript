class Counter {
    static count: number = 0;

    constructor() {
        Counter.count++;
        console.log(`New instance created. Total count: ${Counter.count}`);
    }

    static resetCount() {
        Counter.count = 0;
        console.log("Counter reset to 0.");
    }
}

const c1 = new Counter(); 
const c2 = new Counter(); 

console.log("Current Count:", Counter.count); 

Counter.resetCount(); 
