var Container = /** @class */ (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.add = function (item) {
        this.items.push(item);
    };
    Container.prototype.remove = function (predicate) {
        this.items = this.items.filter(function (i) { return !predicate(i); });
    };
    Container.prototype.list = function () {
        return this.items;
    };
    return Container;
}());
var container = new Container();
container.add({ id: 1, name: "Item One" });
container.add({ id: 2, name: "Item Two" });
console.log(container.list());
container.remove(function (item) { return item.id === 1; });
console.log(container.list());
