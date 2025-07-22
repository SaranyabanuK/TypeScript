var Counter = /** @class */ (function () {
    function Counter() {
        Counter.count++;
        console.log("New instance created. Total count: ".concat(Counter.count));
    }
    Counter.resetCount = function () {
        Counter.count = 0;
        console.log("Counter reset to 0.");
    };
    Counter.count = 0;
    return Counter;
}());
var c1 = new Counter();
var c2 = new Counter();
console.log("Current Count:", Counter.count);
Counter.resetCount();
