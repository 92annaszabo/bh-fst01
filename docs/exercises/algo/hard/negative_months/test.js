const path = require('path');
const solutionDir = path.basename(process.argv[2]);
const mpath = `./${solutionDir}/negative_months`;
const assert = require('chai').assert;

let negativeMonths;

try {
    negativeMonths = require(mpath).negativeMonths;
} catch (e) {
    console.error(`Error seting up test: could not load module ${mpath}`);
    process.exit(1);
}

describe('negativeMonth', () => {
    it('should return empty array if empty input is given', () => {
        assert.deepEqual(negativeMonths([]), []);
    });

    it('should return empty array if every month was non-negative', () => {
        assert.deepEqual(negativeMonths(
            [
                month('January', [100, -20, -50, -10]),
                month('February', [100, -20, -50, -30]),
                month('March', [100, -20, -100, 30]),
            ]
        ),
        []);
    });

    it('should return array of month names for month with negative balance', () => {
        assert.deepEqual(negativeMonths(
            [
                month('January', [100, -20, -50, -10]),
                month('February', [100, -20, -50, -50]),
                month('March', [100, -20, -100, -30]),
            ]
        ),
        ['February', 'March']);
    });
});

function month(name, transactions) {
    return {name, transactions};
}