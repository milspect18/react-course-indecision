// const square = function (num) {
//     return num * num
// }

// const squareArrow = (num) => {
//     return num * num
// }

// const squareArrow = (num) => num * num

// console.log(squareArrow(40))

const getFirstNameVerbose = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstNameVerbose('Karen White'))
console.log(getFirstName('Kyle Price'))


// Section 2
// const add = function(a, b) {
//     console.log(arguments)
//     return a + b
// }

const add = (a, b) => {
    // Arguments is no longer bound
    return a + b
}

console.log(add(55, 1))


// This is also no longer bound in arrow functions
const user = {
    name: 'Kyle',
    places: ['San Diego', 'Dacula', 'Tucson'],
    printPlacesLived() {    // bound this
        return this.places.map((place) => this.name + ' has lived in ' + place)
    }
}

console.log(user.printPlacesLived())

// Challenge
const multiplier = {
    values: [8, 6, 7, 5, 3, 0],
    multiplyBy: 9,
    multiply() {
        return this.values.map((value) => value * this.multiplyBy)
    }
}

console.log(multiplier.multiply())