let colors = ["blue", "green", "purple", "black", "orange"];

for (var i=0;i<colors.length;i++){
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

suffix=["st","nd","rd","th"]
for (var i=0;i<colors.length;i++){
    if(i<3){
        console.log(`My ${i+1+suffix[i]} choice is ${colors[i]}`)
    }
    else{
        console.log(`My ${i+1+suffix[3]} choice is ${colors[i]}`)
    }
}

