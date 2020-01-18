const numbers = [1,2,3,4,5,6,7,8]
const divisors = [2,1]

const string = ['a', 'aa', 'ab', 'aaa'];
const string2 = ['a', 'ac', 'ab', 'aaa'];
const testString1 = 'aa';
const testString2 = 'ab'

// 1. azok numbers tömb azon elemei, amelyek minden divisor tömbben beadott elemmel oszthatók
let dividables = (numbers,divisors) => {
    return numbers.filter(number => divisors.every(divisor => number % divisor == 0))
}

console.log(dividables(numbers,divisors))

// 2. azok a stringek, amelyek csak a charStringben beadott karaktereket tartalmazzák, mást nem
let legalStrings = (strings, charStr) =>{
    
    return strings.filter(string => string.split('').every(stringChar => charStr.includes(stringChar)))

} 

console.log(legalStrings(string, testString1))
console.log(legalStrings(string, testString2))
console.log(legalStrings(string2, testString2))

//3. legnagyobb szám a tömbben reduce-al

const nums = [1, 2, 3, 4, 5, 121, -6, -7, -8, -9, 10];

let getMaxNums = (nums) => nums.reduce((max,curr) => Math.max(max,curr));

console.log(getMaxNums(nums));

//4. egy tömb elemeit egy feltétel mentén kétfelé válogatni
const cond = (num) => num > 0 ? true : false

const select = (arr,cond) =>{
    let selected = {};
    arr1 = [];
    arr2 = [];
    arr.forEach(a => cond(a) === true ? arr1.push(a) : arr2.push(a));
    selected.arrA = arr1;
    selected.arrB = arr2;
    return selected
}

console.log(select(nums,cond))

//5. isPermutation megmondja egy stringről, hogy, hogy a másik string permutációja-e (előállítható-e a subject csak a base karaktereiből
// azt kell megnézni, hogy a subject összes karaktere megvan-e a b-ben és fordítva

const isPermutation = (subject, base) => {
    if (subject.length !== base.length) return false
    else return subject.split('').every(subChar => base.includes(subChar)) && base.split('').every(baseChar => subject.includes(baseChar));
}

console.log(isPermutation('aa', 'a'));
console.log(isPermutation('a', 'aa'));
console.log(isPermutation('aa', 'aa'));
console.log(isPermutation('ab', 'ba'));
console.log(isPermutation('ab', 'ab'));
console.log(isPermutation('ba', 'ba'));
console.log(isPermutation('ba', 'ab'));
console.log(isPermutation('aab', 'aba'));
console.log(isPermutation('bab', 'aba')); //false




