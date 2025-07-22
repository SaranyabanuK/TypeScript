var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, gender, employeeId) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeInfo = function () {
        // Can access this.gender but not this.age
        return "".concat(this.getDetails(), ", Gender: ").concat(this.gender, ", ID: ").concat(this.employeeId);
    };
    return Employee;
}(Person));
var emp = new Employee("Saranya", 22, "Female", 101);
console.log(emp.getEmployeeInfo());
console.log(emp.age); //Error: 'age' is private
console.log(emp.gender); //Error: 'gender' is protected
