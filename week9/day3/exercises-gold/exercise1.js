function getProperty(obj, prop) {
    if (prop in obj) {
        return obj[prop];
    }
    return undefined;
}
var admin = {
    name: "John",
    email: "john@example.com",
    adminLevel: 2
};
console.log(getProperty(admin, "name"));
console.log(getProperty(admin, "adminLevel"));
console.log(getProperty(admin, "nonexistent"));
