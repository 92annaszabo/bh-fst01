const path = require('path');
const solutionDir = path.basename(process.argv[2]);
const mpath = `./${solutionDir}/maxsearch`;
const assert = require('chai').assert;

let maxsearch;

try {
    maxsearch = require(mpath)
} catch (e) {
    console.error(`Error seting up test: could not load module ${mpath}`);
    process.exit(1);
}

describe('maxsearch', () => {
    it('should return undefined for empty array', () => {
        const arr = [];

        const actual = maxsearch.maxsearch(arr);

        assert.strictEqual(actual, undefined);
    });

    it('should return the only value in a one-element array', () => {
        const arr = [42];

        const actual = maxsearch.maxsearch(arr);

        assert.strictEqual(actual, 42);
    });

    it('should return the maximum value in an integer array', () => {
        const arr = [5, 2, 8, 10, 3];

        const actual = maxsearch.maxsearch(arr);

        assert.strictEqual(actual, 10);
    });
});


