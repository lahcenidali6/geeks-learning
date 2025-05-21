const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
const secretSociety=names
secretSociety.sort()
console.log(secretSociety)

outPut=""
for (key in secretSociety){
  outPut+=secretSociety[key][0]
}
console.log(outPut)

