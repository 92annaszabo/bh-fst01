

/**
 * ARROW FUNCIONS
 */
function testWithoutArraw(x) {
  return x
}

const testWithArrow = (x) => {
  return x
}
console.log(testWithoutArraw())
console.log(testWithoutArraw(122343))

console.log(testWithArrow())
console.log(testWithArrow(122343))

[1,23,4,5,6,7].map((c) => console.log(c))
