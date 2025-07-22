function outerFunction() {
    var count = 0;
    return function innerFunction() {
        count++;
        console.log("Current count is: ".concat(count));
    };
}
var counter = outerFunction();
counter();
counter();
counter();
