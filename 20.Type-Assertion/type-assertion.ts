let someValue: unknown = "Buttercup is awesome!";

// Using angle-bracket syntax
let strLength1: number = (<string>someValue).length;
console.log("Length (angle-bracket):", strLength1);

// Using 'as' syntax 
let strLength2: number = (someValue as string).length;
console.log("Length (as syntax):", strLength2);

// DOM example - browser only
window.onload = () => {
    let elem = document.getElementById("myInput") as HTMLInputElement | null;
    if (elem) {
        elem.value = "Typed by assertion!";
        console.log("Input value set:", elem.value);
    }
};
