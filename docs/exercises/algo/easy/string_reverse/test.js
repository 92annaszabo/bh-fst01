const path = require('path');
const solutionDir = path.basename(process.argv[2]);
const mpath = `./${solutionDir}/string_reverse`;
const assert = require('chai').assert;

let stringReverse;

try {
    stringReverse = require(mpath).stringReverse;
} catch (e) {
    console.error(`Error seting up test: could not load module ${mpath}`);
    process.exit(1);
}

describe('stringReverse', () => {
    it('should return empty string when empty string is given', () => {
        assert.deepEqual(stringReverse(''), '');
    });

    it('should return reverse of string when non-empty string is given', () => {
        assert.deepEqual(stringReverse('foobar'), 'raboof');
    });
});