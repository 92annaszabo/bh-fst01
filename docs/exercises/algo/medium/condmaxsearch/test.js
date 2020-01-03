const path = require('path');
const solutionDir = path.basename(process.argv[2]);
const mpath = `./${solutionDir}/condmaxsearch`;
const assert = require('chai').assert;

let condmaxsearch;

try {
    condmaxsearch = require(mpath)
} catch (e) {
    console.error(`Error seting up test: could not load module ${mpath}`);
    process.exit(1);
}

describe('condmaxsearch', () => {
    it('should return undefined when array is undefined', () => {
        const arr = [];

        const actual = condmaxsearch.condmaxsearch(arr);

        assert.strictEqual(actual, undefined);
    });

    it('should return undefined when array is [42] and condition is n => n < 0', () => {
        const arr = [42];

        const actual = condmaxsearch.condmaxsearch(arr);

        assert.strictEqual(actual, undefined);
    });

    it('should return -2 when array is [5, -2, -10, 10, 3] and condition is n => n < 0', () => {
        const arr = [5, -2, -10, 10, 3];

        const actual = condmaxsearch.condmaxsearch(arr, n => n < 0);

        assert.strictEqual(actual, -2);
    });
})