interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

// Intersection type combines both Person & Employee
type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
    name: "Saranya",
    age: 22,
    employeeId: 101,
    department: "Development"
};

console.log(emp);
