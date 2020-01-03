const IllegalState = require('./errors/IllegalState');

const LIGHTWEIGHT_START = 48;
const MIDDLEWEIGHT_START = 61;
const HEAVYWEIGHT_START = 91;

const LIGHTWEIGHT = 1;
const MIDDLEWEIGHT = 2;
const HEAVYWEIGHT = 3;

class Boxer {
    constructor(weight, club) {
        if (weight === undefined) throw new IllegalState();
        if (weight < LIGHTWEIGHT_START) throw new RangeError();

        this._weight = weight;
        this._club = club || null;
    }

    weightClass() {
        if (this._weight < MIDDLEWEIGHT_START) return LIGHTWEIGHT;
        if (this._weight < HEAVYWEIGHT_START) return MIDDLEWEIGHT;

        return HEAVYWEIGHT;
    }

    club() {
        return this._club;
    }

    sign(club) {
        if (this._club && this._club !== club) throw new IllegalState();

        this._club = club;
    }

    leave() {
        this._club = null;
    }
}

module.exports = Boxer;