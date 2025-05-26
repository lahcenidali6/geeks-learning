function kilToGram(weight){
    return weight*1000
}

const kilToGram2=function(weight){
    return weight*1000
}

// Function declaration is hoisted and can be called before it's defined; function expression is not hoisted

const kilToGram3=(weight)=>(weight*1000)
