function changeEnough(itemPrice, amountOfChange){
    sum=amountOfChange[0]*0.25+amountOfChange[1]*0.10+amountOfChange[2]*0.05+amountOfChange[3]*0.01
    if (sum>=itemPrice) return true
    else return false
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
