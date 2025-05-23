function hotelCost() {
    input = prompt("how many nights you will stying ? : ")
    if (input) {
        if (!isNaN(input)) {
            return (input * 140)
        }
        else {
            alert("invalid input ")
            hotelCost()
        }
    }
    else {
        alert("please enter number :)");
        hotelCost();
    }
}

function planeRideCost() {
    destination = prompt("what is your destination ? : ")
    if (destination) {
        if (isNaN(destination)) {
            destination = destination.toLowerCase()
            switch (destination) {
                case 'london':
                    return 183
                case 'paris':
                    return 220
                default:
                    return 300
            }
        }
        else {
            alert("invalid destination ")
            planeRideCost()
        }
    }
    else {
        alert("please enter destination :)");
        planeRideCost()
    }
}

function rentalCarCost() {
    input = prompt("how many days you will rent the car ? : ")
    if (input) {
        if (!isNaN(input)) {
            let totalPrice=input*40
            if (input>=10) totalPrice-=totalPrice*0.05
            return totalPrice
            
        }
        else {
            alert("invalid input ")
            rentalCarCost()
        }
    }
    else {
        alert("please enter number :)");
        rentalCarCost();
    }
}

function totalVacationCost(){
    let carCost = rentalCarCost()
    let hotelCost1= hotelCost()
    let planeCost = planeRideCost()
    alert(`the car cost : ${carCost}$\nthe hotel cost : ${hotelCost1}$\nthe plane tickets cost : ${planeCost}$\nTotal : ${(carCost+hotelCost1+planeCost)}`)
}

totalVacationCost()