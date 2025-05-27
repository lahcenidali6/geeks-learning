const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

const epicString=epic.reduce((acc, index)=>{
    return acc+=index+=' '
})
