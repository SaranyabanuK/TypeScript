// Using angle-bracket syntax
var someValue1 = "Hello Buttercup!";
var strLength1 = someValue1.length;
console.log("Length using angle-bracket:", strLength1);
// Using 'as' syntax
var someValue2 = "TypeScript is powerful!";
var strLength2 = someValue2.length;
console.log("Length using 'as':", strLength2);
// DOM example - safe for browser only
window.onload = function () {
    var inputElement = document.querySelector("input");
    if (inputElement) {
        inputElement.value = "Casted input";
        console.log("Input value set to:", inputElement.value);
    }
};
