class Car {
  public readonly make: string;
  private readonly model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  public getCarDetails(): string {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar.getCarDetails());

// Trying to modify readonly properties will cause errors:
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property
// myCar.model = "Civic"; // Error: Property 'model' is private and only accessible within class 'Car'

// However, you can modify the year property:
myCar.year = 2022;
console.log(myCar.getCarDetails());
