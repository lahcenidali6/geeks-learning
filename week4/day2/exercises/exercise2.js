const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color,index)=>{
    if(index<=2) console.log(`${index+1}${ordinal[index]} choice is ${color}`)
    else console.log(`${index+1}${ordinal[3]} choice is ${color}`)
})