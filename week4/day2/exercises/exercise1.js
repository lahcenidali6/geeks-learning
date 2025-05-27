const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((color, index)=>{
    console.log(`${index+1}# choice is ${color}.`)
})
if (colors[colors.length-1].toLocaleLowerCase()=="violet") console.log("Yeah")
else console.log("No...")