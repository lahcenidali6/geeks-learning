let input=0
while(input<10){
    check=prompt("Please enter a number:")
    if(check==null){
        break
    }
    else {
        if(typeof(check)=="string"){
            if(isNaN(check)){
                alert("invalid input")
            }
            else input=check
        }
        else {
            alert("invalid input")
        }
    }
   
}


