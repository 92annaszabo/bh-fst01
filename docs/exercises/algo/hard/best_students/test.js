const path = require('path');
const solutionDir = path.basename(process.argv[2]);
const mpath = `./${solutionDir}/best_students`;
const assert = require('chai').assert;

let bestStudents;

try {
    bestStudents = require(mpath).bestStudents;
} catch (e) {
    console.error(`Error seting up test: could not load module ${mpath}`);
    process.exit(1);
}

describe('bestStudents', () => {
    it('should return an empty array when input is empty', () => {
        
    });

    it('should return array of names of students for a proper input', () => {
        const courses = [
            [student('Sally', 42), student('Frank', 30), student('Alice', 41)],
            [student('James', 32), student('Quentin', 30), student('Steve', 41)]
        ];

        assert.deepEqual(
            bestStudents(courses),
            ['Sally', 'Steve']
        );
    });

    it('should return all students from a class who scored the same highest score ', () => {
        const courses = [
            [student('Sally', 42), student('Frank', 30), student('Alice', 41)],
            [student('James', 32), student('Quentin', 41), student('Steve', 41)]
        ];

        assert.deepEqual(
            bestStudents(courses),
            ['Sally', 'Quentin', 'Steve']
        );
    });
});

function student(name, score) {
    return {name, score};
}