const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1)

people[2]="Jason"

people.push("amin")


console.log(people.indexOf("Mary"))

peopleCopy=people.slice(1)

console.log(people.indexOf("Foo"))
// is not a valid index in JavaScript arrays, so it's a safe value to signal failure

let last =people[people.length-1]

//part 2
for (var i =0 ; i<people.length;i++){
    console.log(people[i])
}

for (var i =0 ; i<people.length;i++){
    console.log(people[i])
    if(people[i]=="Devon"){
        break
    }
}
