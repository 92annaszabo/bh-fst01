// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére

// (1)

const person = { first: 'John', last: 'Doe' }

<<<<<<< HEAD:docs/lectures/20200104/homework_SZA/destruct/02-object-convert.js
// const first = obj.first
// const last = obj.last

const {first, last} = person
=======
const first = obj.first
const last = obj.last
//Megoldás:
    const {first, last} = person
>>>>>>> ab90e33d9a06e89d65be368ca4acd929e5de1b9c:docs/lectures/20200104/homework/destruct/02-object-convert.js

console.log(first, last)
console.log(last)


// (2)

person.address = {
    city: 'Whasington',
    state: 'DC',
    street: '6th street'
}
<<<<<<< HEAD:docs/lectures/20200104/homework_SZA/destruct/02-object-convert.js
// const state = person.address.state

const {address: {state}} = person
=======
const state = person.address.state
//Megoldás:
    const {address: {state}} = person
>>>>>>> ab90e33d9a06e89d65be368ca4acd929e5de1b9c:docs/lectures/20200104/homework/destruct/02-object-convert.js

console.log(state)