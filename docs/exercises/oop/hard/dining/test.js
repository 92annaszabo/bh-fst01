const assert = require('chai').assert;

const solutionDir = 'laszlo_szucs'

const Dish = require(`./${solutionDir}/Dish`);
const Restaurant = require(`./${solutionDir}/Restaurant`);
const Guest = require(`./${solutionDir}/Guest`);
const Dining = require(`./${solutionDir}/Dining`);

describe('Dish', () => {

    describe('containsAny', () => {
        it('should return true if dish contains any of the provided ingredients', () => {
            const dish = new Dish(['sugar', 'dairy']);
            
            assert.isTrue(dish.containsAny(['sugar']));
        });

        it('should return false if dish does not contains any of the provided ingredients', () => {
            const dish = new Dish(['sugar', 'dairy']);
            
            assert.isFalse(dish.containsAny(['poultry']));
        });
    });


});

describe('Restaurant', () => {
    describe('recommend', () => {
        it('should return list of dishes not containing any of the provided ingredients', () => {
            const peanutSugar = new Dish(['peanut', 'sugar']);
            const peanut = new Dish(['peanut']);
            const sugar = new Dish(['sugar']);
            const ok = new Dish(['water']);
            const restaurant = new Restaurant([peanutSugar, peanut, sugar, ok]);

            const dispreferences = ['peanut', 'sugar'];
            const recommendations = restaurant.recommendations(dispreferences);

            assert.deepEqual(recommendations, [ok]);
        });
    });
});

describe('Dining', () => {
    describe('options', () => {
        it('should return the restaurants where everyone has at least one recommendation', () => {

            const expected = [
                new Restaurant([
                    new Dish(['fish', 'rice']),
                    new Dish(['vegetables', 'rice']),
                    new Dish(['poultry', 'rice']),
                ]),
                new Restaurant([
                    new Dish(['redmeat', 'rice']),
                    new Dish(['vegetables', 'rice'])
                ]),
            ];
            
            const dining = new Dining([
                new Guest(['poultry', 'redmeat']),
                new Guest(['dairy']),
                new Guest([])
            ], [
                new Restaurant([
                    new Dish(['dairy', 'rice'])
                ]),
                ...expected
            ]);

            const options = dining.options();

            assert.deepEqual(options, expected);
        });
    });
});