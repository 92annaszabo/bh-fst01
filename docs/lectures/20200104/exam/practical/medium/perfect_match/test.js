const assert = require('chai').assert;

const Traits = require('./solution/Traits')
const Person = require('./solution/Person')

const DEFAULT_NICE_TRAIT = false
const DEFAULT_FUNNY_TRAIT = false
const DEFAULT_PERSON_TRAITS = {funny: false, nice: false}
const DEFAULT_PERSON_PREFERENCES = {funny: false, nice: false}

describe('Traits', () => {
    describe('constructor(nice, funny)', () => {
        it('should initialize the properties', () => {
            const t = new Traits(false, false)

            assert.isFalse(t.nice)
            assert.isFalse(t.funny)
        })

        it('should initialize property to false when nice is undefined', () => {
            const t = new Traits(undefined, true)

            assert.isFalse(t.nice)
        })
        
        it('should initialize property to false when funny is undefined', () => {
            const t = new Traits(true, undefined)

            assert.isFalse(t.funny)
        })
        
    })

    describe('match(other)', () => {
        it('should return true if trait properties matches other traits', () => {
            const t = createTraits({nice: true, funny: false})
            const other = createTraits({nice: true, funny: false})

            assert.isTrue(t.match(other))
        })

        it('should return false if any trait properties differ from other trait', () => {
            const t = createTraits({nice: true, funny: true})
            const other = createTraits({nice: false, funny: false})

            assert.isFalse(t.match(other))
        })
    })
})

describe('Person', () => {
    describe('constructor(traits, preferences)', () => {
        it('should initialize the properties', () => {
            const preferences = createTraits({nice: true})
            const traits = createTraits({nice: true, funny: true})
            const p = new Person(traits, preferences)

            assert.deepEqual(p.traits, traits)
            assert.deepEqual(p.preferences, preferences)
        })

    })

    describe('recommendations(persons)', () => {
        it('should return all the persons where all the traits match the preferences', () => {
            const candidate1 = createPerson({traits: createTraits({funny: true})})
            const candidate2 = createPerson({traits: createTraits({nice: true, funny: true})})
            const candidate3 = createPerson({traits: createTraits({funny: true, nice: true})})
            const p = createPerson({
                traits: createTraits(),
                preferences: createTraits({funny: true, nice: true})
            })

            assert.deepEqual(
                p.recommendations([candidate1, candidate2, candidate3]),
                [candidate2, candidate3]
            )

        })
    })

})

function createTraits(options) {
    const t = new Traits()
    
    options = options || {}
    t.nice = options.nice === undefined? DEFAULT_NICE_TRAIT : options.nice
    t.funny = options.funny === undefined? DEFAULT_FUNNY_TRAIT : options.funny
    
    return t
    
}

function createPerson(options) {
    const p = new Person()

    options = options || {}
    p.traits = options.traits === undefined? DEFAULT_PERSON_TRAITS : options.traits
    p.preferences = options.preferences === undefined? DEFAULT_PERSON_PREFERENCES : options.preferences

    return p
}