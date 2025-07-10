interface MyStorage<T> {
  add(item: T): void;
  get(index: number): T;
}

class Box<T> implements MyStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index];
  }
}

const numberBox = new Box<number>();
numberBox.add(10);
numberBox.add(20);
console.log(numberBox.get(0)); 

const stringBox = new Box<string>();
stringBox.add("hello");
stringBox.add("world");
console.log(stringBox.get(1)); 
