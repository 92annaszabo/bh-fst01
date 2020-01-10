const assert = require('chai').assert
const GasStation = require('./solution/GasStation')
const Pump = require('./solution/Pump')
const FuelRefill = require('./solution/FuelRefill')

const DEFAULT_TEST_FUEL_TYPE = '95'
const DEFAULT_TEST_STATION_NAME = 'Default Test Station'

describe('Pump', () => {
    describe('constructor(fuelType, available)', () => {
        it('should initialize properties', () => {
            const p = new Pump('95', false)

            assert.strictEqual(p._fuelType, '95')
            assert.strictEqual(p._available, false)
        })
        
        it('should initialize _available with false if available is undefined', () => {
            const p = new Pump('95')

            assert.isFalse(p._available)
        })

        it('should throw error if fuel type is undefined', () => {
            assert.throws(() => new Pump())
        })

        it('should throw error if fuel type is empty', () => {
            assert.throws(() => new Pump())
        })

    })

    describe('fuelType()', () => {
        it('should return the fuel type', () => {
            const p = new Pump('95')

            assert.strictEqual(p.fuelType(), '95')
        })
    })

    describe('isAvailable()', () => {
        
        it('should return false if _available is false', () => {
            const p = new Pump('95')
            p._available = false

            assert.isFalse(p.isAvailable())
        })

        it('should return true if _available is true', () => {
            const p = new Pump('95')
            p._available = true

            assert.isTrue(p.isAvailable())
        })
    })
})

describe('GasStation', () => {
    describe('constructor(name, pumps)', () => {
        it('should initialize properties', () => {
            const pumps = [createPump()]
            const gs = new GasStation(DEFAULT_TEST_STATION_NAME, pumps)

            assert.deepEqual(gs._pumps, pumps)
        })

        it('should throw an error when pumps is empty', () => {
            assert.throws(() => new GasStation(undefined, []))
        })

        it('should throw an error when pumps is undefined', () => {
            assert.throws(() => new GasStation())
        })

        it('should throw an error when name is undefined', () => {
            assert.throws(() => new GasStation(undefined, [createPump()]))
        })

        it('should throw an error when name is empty', () => {
            assert.throws(() => new GasStation('', [createPump()]))
        })
    })

    describe('availablePump(fuelType)', () => {
        it('should return an available pump with fuel type if any', () => {
            const pump = createPump('95', true)
            const gs = createGasStation([pump])

            const availablePump = gs.availablePump('95')

            assert.strictEqual(availablePump, pump)
        })

        it('should return undefined if no pump is found with given fuel type', () => {
            const pumps = [createPump('95')]
            const gs = createGasStation(pumps)

            const availablePump = gs.availablePump('100')

            assert.isUndefined(availablePump)
        })

        it('should return undefined if no pump is available', () => {
            const pumps = [createPump(DEFAULT_TEST_FUEL_TYPE, false)]
            const gs = createGasStation(pumps)

            const availablePump = gs.availablePump(DEFAULT_TEST_FUEL_TYPE)

            assert.isUndefined(availablePump)
        })
    })
})


describe('FuelRefill', () => {
    describe('options(gasStations, fuelTypes)', () => {
        it('should return gas stations with available pumps for each fuel type', () => {
            const fr = new FuelRefill()

            const station1 = createGasStation(([createPump('95')]), 'Station 1')
            const station2 = createGasStation([createPump('95'), createPump('100')], 'Station 2')
            const gasStations = [station1, station2]
            const fuelTypes = ['95', '100']

            assert.deepEqual(
                fr.options(gasStations, fuelTypes), 
                {
                    '95': ['Station 1', 'Station 2'],
                    '100': ['Station 2']
                }
            )
        })
    })
})

function createPump(fuelType, available) {
    fuelType = fuelType || DEFAULT_TEST_FUEL_TYPE
    available = available === false? false : true
    return new Pump(fuelType, available)
}

function createGasStation(pumps, name) {
    name = name || DEFAULT_TEST_STATION_NAME
    pumps = pumps || [createPump()]
    return new GasStation(name, pumps)
}