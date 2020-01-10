const assert = require('chai').assert

const PetStore = require('./solution/PetStore')
const Pet = require('./solution/Pet')

describe('Pet', () => {
    describe('constructor(name, species)', () => {
        it('should initialize the pet instance', () => {
            const p = new Pet('Bowser', 'dog')

            assert.strictEqual(p.name, 'Bowser')
            assert.strictEqual(p.species, 'dog')
        })
    })
})

describe('PetStore', () => {
    describe('constructor(pets)', () => {
        it('should initialize the pet store', () => {
            const pets = [createPet()]
            const ps = new PetStore(pets)

            assert.deepEqual(ps.pets, pets)
        })
    })

    describe('listPets(species)', () => {
        it('should return list of pets of species', () => {
            const dog = createPet({species: 'dog'})
            const cat = createPet({species: 'cat'})
            const pets = [dog, cat]
            const ps = new PetStore(pets)

            assert.deepEqual(ps.listPets('dog'), [dog])
            assert.deepEqual(ps.listPets('cat'), [cat])
        })

        it('should return empty list when no pet is found from species', () => {
            const dog = createPet({species: 'dog'})
            const pets = [dog]
            const ps = new PetStore(pets)

            assert.deepEqual(ps.listPets('cat'), [])
        })

        it('should return list of all pets when species is missing', () => {
            const dog = createPet({species: 'dog'})
            const cat = createPet({species: 'cat'})
            const pets = [dog, cat]
            const ps = new PetStore(pets)

            assert.deepEqual(ps.listPets(), [dog, cat])
        })
    })

    describe('buy', () => {
        it('should remove the pet called by name from the pet store ', () => {
            const dog = createPet({name: 'Scooby'})
            const pets = [dog]
            const ps = new PetStore(pets)

            ps.buy('Scooby')

            assert.deepEqual(ps.listPets(), [])
        })

        it('should return the pet bought', () => {
            const scooby = createPet({name: 'Scooby'})
            const pets = [scooby]
            const ps = new PetStore(pets)

            const bought = ps.buy('Scooby')

            assert.strictEqual(bought, scooby)
        })

        it('should throw error if pet parameter is missing ', () => {
            const ps = new PetStore()

            assert.throws(() => ps.buy())
        })

        it('should throw error if no pet is found by name ', () => {
            const scooby = createPet({name: 'Scooby'})
            const pets = [scooby]
            const ps = new PetStore(pets)

            assert.throws(() => ps.buy('Tyson'))
        })
    }) 

})

function createPet(options) {
    options = options || {}
    name = options.name || 'Bowser'
    species = options.species || 'dog'
    return new Pet(name, species);
}
