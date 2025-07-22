// A generic function to return any type
function identity(value) {
    return value;
}
var output1 = identity("Hello Generics!");
var output2 = identity(42);
console.log(output1);
console.log(output2);
// A generic class
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var stringBox = new Box("TypeScript");
var numberBox = new Box(123);
console.log(stringBox.getContents());
console.log(numberBox.getContents());
