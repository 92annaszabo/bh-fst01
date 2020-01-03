const assert = require('chai').assert;
const Person = require('./solution/Person');

describe('Person', () => {
    describe('constructor', () => {
        it('should throw error if name is missing', () => {
            assert.throws(() => new Person(undefined, 33));
        });
        it('should throw error if name is empty', () => {
            assert.throws(() => new Person('', 33));
        });
        it('should throw error if age is missing', () => {
            assert.throws(() => new Person('John Doe'));
        });
        it('should throw error if age is negative', () => {
            assert.throws(() => new Person('John Doe', -33));
        });
    });

    describe('age', () => {
        it('should return the age of the person', () => {
            const p = personWithAge(33);

            assert.strictEqual(p.age(), 33);
        });
    });
    
    describe('growOlder', () => {
        it('should increment the person age by one', () => {
            const p = personWithAge(32);

            p.growOlder();

            assert.equal(p.age(), 33);

        })
    })

    describe('sayHi', () => {
        it('should return an introduction string', () => {
            const p = new Person('John Doe', 33);
            
            assert.equal(p.sayHi(), "Hi, my name is John Doe and I'm 33 years old.");
        });
    });
});

function personWithAge(age) {
    return new Person('John Doe', age);
}