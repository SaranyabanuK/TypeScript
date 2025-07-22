// Using angle-bracket syntax
let someValue1: unknown = "Hello Buttercup!";
let strLength1: number = (<string>someValue1).length;

console.log("Length using angle-bracket:", strLength1);

// Using 'as' syntax
let someValue2: unknown = "TypeScript is powerful!";
let strLength2: number = (someValue2 as string).length;

console.log("Length using 'as':", strLength2);

// DOM example - safe for browser only
window.onload = () => {
    let inputElement = document.querySelector("input") as HTMLInputElement | null;
    if (inputElement) {
        inputElement.value = "Casted input";
        console.log("Input value set to:", inputElement.value);
    }
};
