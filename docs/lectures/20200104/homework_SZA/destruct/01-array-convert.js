// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// a tömbök adatainak kinyerésére

// (1) egyszerű destructuring
const arr1 = ['Budapest', 'HU']
// const city = arr1[0], country = arr1[1]
const [city, country] = arr1
console.log(city)
console.log(country)


// (2) tömbelemek elhagyása
const data = ['Steve Ballmest','1970', '01', '01', 'Washington', 'DC']
//const name = data[0], yob = data[1], city2 = data[4]
const [name,yob,,,city2] = data
console.log(name)
console.log(yob)
console.log(city2)

// (3) visszatérési érték destructuringja
function details() {
    return 'Steve Ballmest;1970;01;01;Washington;DC'.split(";")
}
const ret = details()
// const name2 = ret[0]
// const yob2 = ret[1]
console.log(ret)
const [name2, yob2] = ret
console.log(name2)
console.log(yob2)

// (4) visszatérési érték destructuringja

const removed = [1, 2, 3].splice(1, 1).pop()

