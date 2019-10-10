const name = 'Thembhani '
let age = 34
const hashobbies = true


age = 30
const summarizeUser = ( userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has the hobbies: ' + userHasHobby
}

const payment = (amount) => {
    return 'The total amount = '  + 'R ' +(amount + (0.15* amount))
}

console.log(payment(50))

console.log(summarizeUser(name,age,hashobbies))