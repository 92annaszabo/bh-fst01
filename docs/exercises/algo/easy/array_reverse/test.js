const assert = require('chai').assert;
const arrayReverse = require('./solution/arrayReverse')

describe('arrayReverse', () => {
    it('should return empty array when empty array is given', () => {
        assert.deepEqual(arrayReverse([]), []);
    });

    it('should return reverse of array when proper array is given', () => {
        assert.deepEqual(arrayReverse([1, 2, 3]), [3, 2, 1]);
    });
});