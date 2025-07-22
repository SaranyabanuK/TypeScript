class Person {
    public name: string;         // Accessible anywhere
    private age: number;         // Only inside this class
    protected gender: string;    // Inside this class & subclasses

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Employee extends Person {
    private employeeId: number;

    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId = employeeId;
    }

    public getEmployeeInfo(): string {
        // Can access this.gender but not this.age
        return `${this.getDetails()}, Gender: ${this.gender}, ID: ${this.employeeId}`;
    }
}

const emp = new Employee("Saranya", 22, "Female", 101);
console.log(emp.getEmployeeInfo());
console.log(emp.age); // Error: 'age' is private
console.log(emp.gender); // Error: 'gender' is protected
