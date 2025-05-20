const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building["numberOfFloors"])

console.log(`many apartments on the floor 1 : ${building["numberOfAptByFloor"]["firstFloor"]}`)
console.log(`many apartments on the floor 2 : ${building["numberOfAptByFloor"]["thirdFloor"]}`)

console.log(`the name of tenanr : ${building["nameOfTenants"][1]} has ${building["numberOfRoomsAndRent"][building["nameOfTenants"][1].toLocaleLowerCase()]} rooms`)


if ((building["numberOfRoomsAndRent"]["sarah"][1]+building["numberOfRoomsAndRent"]["david"][1])>building["numberOfRoomsAndRent"]["dan"][1]){
    building["numberOfRoomsAndRent"]["dan"][1]=1200
}
