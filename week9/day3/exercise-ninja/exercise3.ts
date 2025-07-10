class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index] as T;
  }

  list(): T[] {
    return this.items;
  }
}


type Product = { id: number; name: string };

const productRepo = new Repository<Product>();
productRepo.add({ id: 1, name: "Phone" });
productRepo.add({ id: 2, name: "Laptop" });

console.log(productRepo.get(0)); 
console.log(productRepo.list()); 
