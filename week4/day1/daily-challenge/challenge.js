let client = "Betty";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    });
}

const cloneGroceries = () => {
    let user = client
    console.log(user)
    let shopping = groceries
    groceries.totalPrice="15$"
    groceries.other.paid=false

}

cloneGroceries()
// The changes affected both variables because objects are assigned by reference