function outerFunction(): () => void {
    let count: number = 0;

    return function innerFunction() {
        count++;
        console.log(`Current count is: ${count}`);
    };
}

const counter = outerFunction();

counter(); 
counter(); 
counter(); 
