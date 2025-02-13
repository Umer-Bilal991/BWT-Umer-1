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


let colorset1=['red', 'blue']
let colorset2=colorset1
colorset1.push ('green')
console.log('colorset1', colorset1)
console.log('colorset2', colorset2)

const obj = ( 'name= umer', 'name= UMer')
console.log (obj)

let lastname = 'Testing'
let fullname= firstname+lastname
console.log(fullname)


let fulladdress='this is my ramdom number ${Math.random()*500}
console.log(fulladdress)







let product={ 
    name: 'HP Elitebook Sleeve'
    age:18
    number:1000
}
console.log(product.'name')



resturant = {
    name: "Ramen Resturant",
    address: Math.floor(Math.random()*500)+500
}
console.log(resturant)



let person = {
    name: 'Ichiran Ramen',
    age : '18',
    job : 'teacher',
}
person.age = '20' //to change the above data
console.log(person)















student = {
    name: 'umer',
    age: '18',
    subjects: 'CS',
    isEnrolled: true
}
console.log(student.name)
console.log(student.age)
console.log(student.subjects)
console.log(student.isEnrolled)
student.grade='A'
console.log(student.grade)










const restaurant = {
    name: 'Ichiran Ramen',
    address: '$(Math.floor(Math.random()*100) +1) Johson Ave', 
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
console.log (restaurant)








let myAge = 18 
if (myAge>20){
    console.log('Your age is less than 22')
}
else{
    console.log('perfect')

}







let isUserLogin = true
let isProSubscriberOrNot= true
if (isUserLogin==false){
    console.log('please login to see data')
}
else {

if (isProSubscriberOrNot==false) {
    console.log('you are pro subscriber')
}
else{
    console.log('please Subscribe')

}
}











// || = And
// && = Or
// ! = Not----opposite 

Ex: 
user=false
if(!user){
    console.log('please login')
}



user=true
pro=false
if(!user){
    console.log('please login')
}
if(user && pro){
    console.log('you are a pro subscriber')
}
if (user && !pro){
    console.log('please subscribe')
}















