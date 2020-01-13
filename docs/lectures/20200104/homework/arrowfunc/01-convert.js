// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

let raining = true
let notraining = false
// let double = function double(x) {
//     return 2 * x
// }


let double = (x) => 2 * x

// function invert(x) {
//     return -x
// }

let invert = (x) => -x

// let hello = function() {
//     return 'hello'
// }

let hello = () => 'hello'


// Alakítsuk function expressionökké az arrow functionöket!

// let helloPrefixer = s => 'hello ' + s

let helloPrefixer = function(s) {
    return 'hello' + s
}

// let doNothing = () => {}

let doNothing = function(){}

// let hello = function() {
//     return 'hello'
// }

let hello = () => 'hello'

// Alakítsuk function declaractionné

//let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'

function advice(raining){
    if(raining){
        return 'Take your umbrella'
    }
    return 'Take your sunglasses'
}

// let isEmpty = arr => !arr.length

function isEmpty(arr){
    return !arr.length
}

//let tricky = want => want = false

function tricky(want){
    want = false
    return want
}

console.log(double(2))
console.log(invert(2))
console.log(hello())
console.log(helloPrefixer(2))
console.log(doNothing())
console.log(isEmpty([1,2,3]))
console.log(advice(raining))
console.log(advice(notraining))
console.log(tricky(1))