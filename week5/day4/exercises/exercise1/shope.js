const products = require("./products")

const findProduct = (namePro)=>{
    return products.find(product=>product.name==namePro)
}
console.log(findProduct("Coffee Mug"))
console.log(findProduct("Bluetooth Speaker"))
console.log(findProduct("Running Shoes"))