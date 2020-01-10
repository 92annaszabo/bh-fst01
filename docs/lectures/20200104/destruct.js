/**
 * DESTRUCTURING ASSIGMENTS
 */

// arrays

const upsLorry = ['alma', 'korte', 'szolo']
console.log(upsLorry)
const alma = upsLorry[0]
const korte = upsLorry[1]
const szolo = upsLorry[2]
console.log(alma, korte, szolo)
const [alma, korte, szolo] = upsLorry

const [x, , v] = upsLorry
upsLorry[upsLorry.length - 1]
console.log(x, v)

const [b, a] = ['a', 'b']
console.log(a,b)


// object
const mediaMarkt = { tv: 120, phone: 200, eRoller: 300 }
const { phone, tv, watch = 200 } = mediaMarkt
console.log(tv, phone, watch)

const eDigital = {
  haztartasDepartment: { vasalo: 200, vizforralo: 300 },
  elektronikaDepartment: {
    phone: 600,
    gameDepartment: {
      game1: 300,
      game2: 400
    }
  }
}

const game1 = eDigital.elektronikaDepartment.gameDepartment.game1

const { game1 } = eDigital
eDigital.game1

const {
  elektronikaDepartment: {
    phone,
    gameDepartment: {
      game1
    },
    photoDepartment: {
      camera
    } = { camera: 850 }
  }
} = eDigital

// photoDepartment?.camera // elvis operator <-- meg nem tamogatott

// console.log(phone, game1, camera)


// http://es6-features.org/#UnicodeStringRegExpLiteral

