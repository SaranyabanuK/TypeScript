var someValue = "Buttercup is awesome!";
// Using angle-bracket syntax
var strLength1 = someValue.length;
console.log("Length (angle-bracket):", strLength1);
// Using 'as' syntax 
var strLength2 = someValue.length;
console.log("Length (as syntax):", strLength2);
// DOM example - browser only
window.onload = function () {
    var elem = document.getElementById("myInput");
    if (elem) {
        elem.value = "Typed by assertion!";
        console.log("Input value set:", elem.value);
    }
};
