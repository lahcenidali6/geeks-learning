const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
]
//1
let sumAges = 0;
for (const animal of data) {
  if (animal.type === 'dog') {
    sumAges += animal.age;
  }
}
//2
const sumAges2=data.reduce((acc,animal)=>{
    if(animal["type"]==='dog')acc=acc+(animal["age"]*7)
    return acc
},0)


