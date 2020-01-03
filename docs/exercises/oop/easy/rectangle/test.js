const assert = require('chai').assert;
const Rectangle = require('./solution/Rectangle');

describe('Rectangle', () => {
    describe('constructor', () => {
        it('should throw RangeError if a or b is less than or equal to zero', () => {
            assert.throws(() => new Rectangle(0, 3));
            assert.throws(() => new Rectangle(2, 0));
            assert.throws(() => new Rectangle(-2, 3));
            assert.throws(() => new Rectangle(2, -3));
        });
    });
    describe('perimeter', () => {
        it('should return the perimeter of the rectangle', () => {
            const rect = new Rectangle(2,3);

            const p = rect.perimeter();

            assert.equal(p, 10);
        });
    });
    describe('area', () => {
        it('should return the area of the rectangle', () => {
            const rect = new Rectangle(2,3);

            const a = rect.area();

            assert.equal(a, 6);
        });
    });
})