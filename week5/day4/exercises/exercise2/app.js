import data from "./data.js"
const avgAges=()=>{
    return (data.reduce((acc, pers)=>{
        return acc=acc+pers.age
    },0)/data.length)
}
console.log(avgAges())