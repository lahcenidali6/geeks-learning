function displayNumbersDivisible(divisor){
    sum=0
    for (var i=0;i<501;i++){
        if(i%divisor==0){
            sum+=i
            console.log(i)
        }
    }
    console.log(`Sum : ${sum}`)
}
displayNumbersDivisible(2)
