const assert = require('chai').assert;

const Boxer = require('./solution/Boxer');
const BoxClub = require('./solution/BoxClub');
const IllegalState = require('./solution/errors/IllegalState');

describe('Boxer', () => {
    describe('constructor', () => {
        it('should throw IllegalState when weight is missing', () => {
            assert.throws(() => new Boxer(), IllegalState);
        });
        it('should throw RangeError when weight is lower than lightweight lower bound', () => {
            assert.throws(() => tooLightBoxer(), RangeError);
        });
    });
    describe('weightClass', () => {
        it('should return the weight class of the boxer', () => {
            assert.strictEqual(lightweightBoxer().weightClass(), 1, 'when weight = 48');
            assert.strictEqual(middleweightBoxer().weightClass(), 2, 'when weight = 61');
            assert.strictEqual(heavyweightBoxer().weightClass(), 3, 'when weight = 91');
        });
    });
    describe('club', () => {
        it('should return the current club of the boxer', () => {
            const club = new BoxClub();
            assert.deepEqual(boxerWithClub(club).club(), club);
        });
        it('should return null when the boxer is not associated to any club', () => {
            assert.isNull(boxerWithoutClub().club());
        });
    });
    describe('sign', () => {
        it('should throw IllegalState error when boxer is associated with another club', () => {
            const club = new BoxClub();
            const targetClub = new BoxClub();
            const boxer = boxerWithClub(club);

            assert.throws(() => boxer.sign(targetClub), IllegalState);
        });
        it('should throw IllegalState error when club argument is null', () => {
            const club = new BoxClub();
            const boxer = boxerWithClub(club);

            assert.throws(() => boxer.sign(null), IllegalState);
        });
    });
    describe('leave', () => {
        it('should remove the reference to the club from ', () => {
            const club = new BoxClub();
            const boxer = new Boxer(48, club);

            boxer.leave();

            assert.isNull(boxer.club());
        });
    })
});

describe('BoxClub', () => {

    describe('boxers', () => {
        it('should return list of all currently signed boxers when no argument is specified', () => {
            const boxers = [lightweightBoxer(), lightweightBoxer()];
            const club = new BoxClub(boxers);
            assert.deepEqual(club.boxers(), boxers);
        });

        it('should return list of boxers of the specified weight class when a weight class is provided', () => {
            const lightweights = [lightweightBoxer(), lightweightBoxer()];
            const middleweights = [middleweightBoxer(), middleweightBoxer()];
            const heavyweights = [heavyweightBoxer(), heavyweightBoxer()];
            const boxers = [...lightweights, ...middleweights, ...heavyweights];
            
            const club = new BoxClub(boxers);

            assert.deepEqual(club.boxers(1), lightweights);
            assert.deepEqual(club.boxers(2), middleweights);
            assert.deepEqual(club.boxers(3), heavyweights);
            
        });


        it('should return empty array when there are no boxers in the provided weight class', () => {
            const lightweights = [lightweightBoxer(), lightweightBoxer()];
            const club = new BoxClub(lightweights);

            assert.isEmpty(club.boxers(2));
        });

        it('should return empty array when there are no boxers at all in the club', () => {
            const club = new BoxClub();

            assert.isEmpty(club.boxers());
        });

    });

    describe('sign', () => {
        it('should add the boxer to the box club boxers if boxer is not signed elsewhere', () => {
            const boxers = [];
            const boxer = lightweightBoxer();
            const club = new BoxClub(boxers);

            club.sign(boxer);

            assert.deepEqual(boxers, [boxer]);

        });

        it('should return the updated array of boxers on success', () => {
            const boxer = lightweightBoxer();
            const club = new BoxClub();

            const actual = club.sign(boxer);

            assert.deepEqual(actual, [boxer]);

        });

        it('should throw IllegalState when boxer is signed elsewhere', () => {
            const boxer = boxerWithClub(new BoxClub());
            const club = new BoxClub();

            assert.throws(() => club.sign(boxer), IllegalState);

        });
    });

    describe('breakUp', () => {
        it('should remove boxer from boxers when boxer is signed at the box club', () => {
            const boxer = lightweightBoxer();
            const boxers = [boxer];
            const club = new BoxClub(boxers);

            club.breakUp(boxer);

            assert.deepEqual(boxers, []);
        });

        it('should return updated boxers array without the boxer', () => {
            const boxer = lightweightBoxer();
            const club = new BoxClub([boxer]);

            const boxers = club.breakUp(boxer);

            assert.deepEqual(boxers, []);
        });

        it('should throw IllegalState error when boxer is not signed', () => {
            const boxer = lightweightBoxer();
            const club = new BoxClub();

            assert.throws(() => club.breakUp(boxer), IllegalState);
        });
    });
});

function tooLightBoxer() {
    return new Boxer(47);
}

function lightweightBoxer() {
    return new Boxer(48);
}

function middleweightBoxer() {
    return new Boxer(61);
}

function heavyweightBoxer() {
    return new Boxer(91);
}

function boxerWithoutClub() {
    return new Boxer(48);
}

function boxerWithClub(club) {
    return new Boxer(48, club);
}

