function makeJuice(size) {
    var ingredients = []
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3)
    }
    function displayJuice() {

        text = `The client wants a ${size} juice, containing ${ingredients.join(',')}`
        document.getElementsByTagName("div")[0].innerText = text
    }
    addIngredients("flour", "sugar", "eggs")
    addIngredients("milk", "banana", "ice")
    displayJuice()

}
makeJuice(6)
