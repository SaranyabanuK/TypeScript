var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.add = function (a, b) {
        return a + b;
    };
    MathUtils.multiply = function (a, b) {
        return a * b;
    };
    return MathUtils;
}());
console.log("Add: ", MathUtils.add(5, 3));
console.log("Multiply: ", MathUtils.multiply(4, 6));
var utils = new MathUtils(); // Not needed – static methods are called on the class itself
