const assert = require('chai').assert;

const Employee = require('./solution/Employee');

const MINIMUM_WAGE = 47000;
const DUMMY_NAME = 'John Doe';

describe('Employee', () => {

    describe('constructor', () => {

        it('should throw error when name is undefined', () => {
            assert.throws(() => new Employee());
        })

        it('should throw error when name is empty', () => {
            assert.throws(() => new Employee(''));
        })

        it('should throw error when salary is negative', () => {
            assert.throws(() => new Employee('Dummy Name', -100000));
        })

        it('should initialize the salary to the minimum wage when undefined', () => {
            const emp = new Employee(DUMMY_NAME);
            
            assert.strictEqual(emp._salary, MINIMUM_WAGE);
        })
    });

    describe('raiseSalary', () => {

        it('should increase the salary of the employee by the given percent', () => {
            const emp = employeeWithSalary(100000);

            emp.raiseSalary(5);

            assert.strictEqual(emp._salary, 105000);
        })

        it('should throw error when percent is negative', () => {
            const emp = dummyEmployee();

            assert.throws(() => emp.raiseSalary(-20));
        })

    });

    describe('annualSalary', () => {
        it('should return the annual salary', () => {
            const emp = employeeWithSalary(100000);

            assert.strictEqual(emp.annualSalary(), 1200000);
        })
    })

    describe('toString', () => {
        it('should return a string representation of the state', () => {
            const emp = employeeWithSalary(100000);

            assert.strictEqual(emp.toString(), 'Employee[_name="John Doe",_salary=100000]');
        })
    })


});



function dummyEmployee() {
    return new Employee(DUMMY_NAME);
}

function employeeWithSalary(salary) {
    return new Employee(DUMMY_NAME, salary);
}