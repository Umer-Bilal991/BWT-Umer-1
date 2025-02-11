let set1 =[1,2,3,]
let set2 = [4,5,6]
let combine= set1.concat(set2)
console.log(combine)

console.log(combine.includes(5))
console.log(combine.includes(8))

let newarray = combine.slice(2,5)
console.log(newarray)

let RemoveNum=combine.splice(3,1)
console.log (RemoveNum)

