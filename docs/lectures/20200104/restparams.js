/**
 * REST PARAMETER
 */
const getNumbers = (x, y) => {
  return x + y
}
console.log(getNumbers(1,2, 3,4,5,6,7,8,5,4,3,23, 32 , 32, 32, 32))

const getNumbersWArray = (x) => {
  let res = 0
  x.map((c) => res += c)
  return res
}
const tomb = [1,2, 3,4,5,6,7,8,5,4,3,23, 32 , 32, 32, 32]
console.log(getNumbersWArray(tomb))

const getNumbersWDynamicArgs = (x, y, ...z) => {
  let res = x + y
  z.map((c) => res += c)
  return res
}
console.log(getNumbersWDynamicArgs(1, 2, 3, 4, 5, 6, 7))

function f(...z) {
  // console.log(x)
  // console.log(y)
  console.log(z)
  console.log(arguments)
}
f(1, 2, 3, 4, 5, 6, 7)

