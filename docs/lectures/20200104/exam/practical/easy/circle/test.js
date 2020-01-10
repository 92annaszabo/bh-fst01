const assert = require('chai').assert;
const Circle = require('./solution/Circle');

describe('Circle', () => {
    describe('constructor', () => {
        it('should initialize the circle', () => {
            const c = new Circle(5)

            assert.strictEqual(c.r, 5)
        });
    });
    describe('perimeter', () => {
        it('should return the perimeter of the circle', () => {
            const c = new Circle(5);

            const p = c.perimeter();

            assert.equal(Math.floor(p), 31);
        });
    });
    describe('area', () => {
        it('should return the area of the circle', () => {
            const c = new Circle(5);

            const a = c.area();

            assert.equal(Math.floor(a), 78);
        });
    });
})