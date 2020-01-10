// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

let double = function double(x) {
    return 2 * x
}

function invert(x) {
    return -x
}

let hello = function() {
    return 'hello'
}


// Alakítsuk function expressionökké az arrow functionöket!

let helloPrefixer = s => 'hello ' + s

let doNothing = () => {}

// Alakítsuk function declaractionné

let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'

let isEmpty = arr => !arr.length

let tricky = want => want = false