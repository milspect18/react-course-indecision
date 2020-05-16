var nameVar = 'Kyle'
var nameVar = 'Mike'    // re-declaration is ok in var...
console.log(nameVar)

let nameLet = 'Bob'
nameLet = 'Igor'
console.log(nameLet)

const nameConst = 'Frank'
console.log(nameConst)

// var's are function scoped (so are let/const)
function getPetName() {
    var petName = 'Otto'
    return petName
}
console.log(getPetName())

// const/let are block level scoped, var's are not!
let fullName = 'Kyle Price'

if (fullName) {
    var firstName = fullName.split(' ')[0]  //created in if block
    console.log(firstName)
}

// but available outside of that block...
console.log(firstName)


ReactDOM.render(<p>test</p>, document.getElementById('app'))
