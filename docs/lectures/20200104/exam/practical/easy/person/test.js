const assert = require('chai').assert;
const Person = require('./solution/Person');

describe('Person', () => {
    describe('constructor(name, age, hobbies)', () => {
        it('should initialize the instance', () => {
            const p = new Person('John Doe', 33, ['coding'])
        })
    });

    describe('birthYear', () => {
        it('should return the year of birth', () => {
            const p = createPerson({age: 20});

            assert.strictEqual(p.birthYear(), 2000);
        });
    });

    describe('sayHi', () => {
        it('should return an introduction string', () => {
            const p = createPerson({name: 'Steve', age: 33, hobbies: ['coding', 'reading']});
            
            assert.equal(p.sayHi(), "Hi, my name is Steve and I'm 33 years old and my hobbies are coding, reading.");
        });
    });
});

function createPerson(options) {
    options = options || {}
    name = options.name || 'John Doe'
    age = options.age || 30
    hobbies = options.hobbies || []
    return new Person(name, age, hobbies);
}