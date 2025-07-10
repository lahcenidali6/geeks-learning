class Container<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(i => !predicate(i));
  }

  list(): T[] {
    return this.items;
  }
}

type Identifiable = { id: number };
type Named = { name: string };
type NamedIdentifiable = Identifiable & Named;

const container = new Container<NamedIdentifiable>();
container.add({ id: 1, name: "Item One" });
container.add({ id: 2, name: "Item Two" });

console.log(container.list()); 
container.remove(item => item.id === 1);
console.log(container.list()); 
