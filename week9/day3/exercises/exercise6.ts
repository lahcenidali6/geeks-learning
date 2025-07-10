type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager in ${emp.department} department.`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a Developer working in ${emp.department}.`;
  } else {
    return `${emp.name} works in ${emp.department} as ${emp.position}.`;
  }
}

const emp1: Employee = {
  name: "Alice",
  age: 35,
  position: "Manager",
  department: "Sales"
};

const emp2: Employee = {
  name: "Bob",
  age: 28,
  position: "Developer",
  department: "IT"
};

console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
