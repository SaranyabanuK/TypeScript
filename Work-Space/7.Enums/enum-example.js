// Numeric Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log("Move:", move); // Output: 2
console.log("Move Direction:", Direction[move]); // Output: Left
// String Enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var currentStatus = Status.Success;
console.log("Status:", currentStatus); // Output: SUCCESS
// Function using enum
function getStatusMessage(status) {
    switch (status) {
        case Status.Success:
            return "Operation was successful!";
        case Status.Failure:
            return "Operation failed.";
        case Status.Pending:
            return "Operation is still pending.";
    }
}
console.log(getStatusMessage(Status.Pending));
