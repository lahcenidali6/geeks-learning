var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.get = function (index) {
        return this.items[index];
    };
    Repository.prototype.list = function () {
        return this.items;
    };
    return Repository;
}());
var productRepo = new Repository();
productRepo.add({ id: 1, name: "Phone" });
productRepo.add({ id: 2, name: "Laptop" });
console.log(productRepo.get(0));
console.log(productRepo.list());
