// Numeric Enum
enum Direction {
    Up,       // 0
    Down,     // 1
    Left,     // 2
    Right     // 3
}

let move: Direction = Direction.Left;
console.log("Move:", move); // Output: 2
console.log("Move Direction:", Direction[move]); // Output: Left

// String Enum
enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
console.log("Status:", currentStatus); // Output: SUCCESS

// Function using enum
function getStatusMessage(status: Status): string {
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
