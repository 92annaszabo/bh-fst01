
/**
 * SPREAD OPERATOR
 */
const boxes = [1, 2, 'x', 'd', 'e', 43]
const fruits = ['apple', 'orange', 'tomato']
let upsLorry = [boxes, fruits]

// fuvar vege
upsLorry = []
upsLorry = [...boxes, ...fruits]

console.log(upsLorry)

concat
const params = ['test', 'test2']
const otherParams = [1, 2].concat(params)

// flat() olvasnivalo => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

console.log(otherParams)

const boxes = [1, 2, 'x', 'd', 'e', 43]
const fruits = ['apple', 'orange', 'tomato']
let upsLorry = []
upsLorry = [...boxes, ...fruits]

const boxes2 = [1, 2, 'x', 'd', 'e', 43, 21,3,3,4,5,6,7,8]
upsLorry = [...upsLorry, ...boxes2]
console.log(upsLorry)

let x = [1,2]
x = [...x]
console.log(x)

stringek
const name = 'viktor'
let tomb = [...name]
console.log(tomb)

objectek
const boxes = { x: 12, y: 13, z: 14, c: 19 }
let upsLorry = { a: 1, b: 2, c: 3 }

upsLorry = { ...upsLorry, ...boxes }
upsLorry = { ...boxes, ...upsLorry }

console.log(upsLorry)
