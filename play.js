// const name = 'Thembhani '
// let age = 34
// const hashobbies = true


// age = 30

// const summarizeUser = ( userName, userAge, userHasHobby) => {
//     return 'Name is ' 
//     + userName + 
//     ', age is ' + userAge +
//      ' and the user has the hobbies: ' + 
//      userHasHobby
// }

// const add = (a,b) => {
//   return a + b
// }

// const assOne =(a) => a + 1


// console.log(add(1,2))



// const payment = (amount) => {
//     return 'The total amount = '  + 'R ' +(amount + (0.15* amount))
// }

// console.log(payment(50))

// console.log(summarizeUser(name,age,hashobbies))



const person  = {
   name: 'Harry',
   age: 29,
   greet() {
     console.log('Hi, I am ' +  this.name)
   }
}

person.greet();

const hobbies = ['Asports','Cooking']

for (let hobby of hobbies){
    console.log(hobby)
}

console.log(hobbies.map(hobby =>  'Hobby: ' + hobby));
console.log(hobbies)


const copiedArray =  [...hobbies]
console.log(copiedArray)
