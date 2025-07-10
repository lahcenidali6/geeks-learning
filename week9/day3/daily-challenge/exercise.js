function handleData(data) {
    return data.map(function (item) {
        switch (item.type) {
            case 'user':
                return "Hello ".concat(item.name, ", age ").concat(item.age);
            case 'product':
                return "Product #".concat(item.id, " costs $").concat(item.price);
            case 'order':
                return "Order ".concat(item.orderId, " with amount $").concat(item.amount);
            default:
                return 'Unknown data type';
        }
    });
}
var mixedData = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 25.5 },
    { type: 'order', orderId: 'ORD123', amount: 99.99 },
    { type: 'user', name: 'Bob', age: 45 }
];
var results = handleData(mixedData);
console.log(results);
