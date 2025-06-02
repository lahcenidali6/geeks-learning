function makeAllCaps(words){
    return new Promise((resolve,reject)=>{
        if(words.every(word=>typeof word=='string')) {
             const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        }else reject("some one not string in array :)")
    })
}
function sortWords(words){
    return new Promise((resolve,reject)=>{
        if(words.length>4) resolve(words.sort())
        else reject("the length of array are less then 4")
    })
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))