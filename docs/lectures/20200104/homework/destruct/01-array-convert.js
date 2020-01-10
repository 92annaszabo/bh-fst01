// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// a tömbök adatainak kinyerésére

// (1) egyszerű destructuring
const arr1 = ['Budapest', 'HU']
const city = arr1[0], country = arr1[1]

// (2) tömbelemek elhagyása
const data = ['Steve Ballmest','1970', '01', '01', 'Washington', 'DC']
const name = data[0], yob = data[0], city = data[4]

// (3) visszatérési érték destructuringja
function details() {
    return 'Steve Ballmest;1970;01;01;Washington;DC'.split()
}
const ret = details()
const name = ret[0]
const yob = ret[1]

// (4) visszatérési érték destructuringja

const removed = [1, 2, 3].splice(1, 1).pop()

