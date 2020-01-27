// Derítsük fel a hátterét és javítsuk ki
// az alábbi SyntaxErrort!
// Tipp: a válasz az Exploring ES6 könyv Destructuring
// fejezetében van!

let a, b

({ foo: a, bar: b } = { foo: 1, bar: 2 })

console.log(a,b)

// a kódblokkok kapcsoszárójellel kezdődnek, ezért destructuring esetében nem kezdhetünk ezzel
// ({ a, b } = { foo: 1, bar: 2 }) alak még nem lesz megfelelő, mert a-ra és b-re undefined-ot kapunk. 
//A bal oldalon meg kell adnunk az objektum kulcsait, és az értékeket tároljuk el az a és b változókban




