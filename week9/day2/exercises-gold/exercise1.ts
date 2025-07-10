class Employee {
  protected name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Salary: $${this.salary}`;
  }
}

class Manager extends Employee {
  public department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  public getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

const manager = new Manager("Alice Johnson", 90000, "HR");
console.log(manager.getDetails());
