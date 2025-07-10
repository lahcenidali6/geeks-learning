type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

type Data = User | Product | Order;

function handleData(data: Data[]): string[] {
  return data.map(item => {
    switch (item.type) {
      case 'user':
        return `Hello ${item.name}, age ${item.age}`;
      case 'product':
        return `Product #${item.id} costs $${item.price}`;
      case 'order':
        return `Order ${item.orderId} with amount $${item.amount}`;
      default:
        return 'Unknown data type';
    }
  });
}


const mixedData: (User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 25.5 },
  { type: 'order', orderId: 'ORD123', amount: 99.99 },
  { type: 'user', name: 'Bob', age: 45 }
];

const results = handleData(mixedData);
console.log(results);
