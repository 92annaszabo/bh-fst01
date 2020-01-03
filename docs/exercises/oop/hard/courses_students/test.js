const assert = require('chai').assert;
const Student = require('./solution/Student');
const Lecturer = require('./solution/Lecturer');
const Course = require('./solution/Course');

describe('Lecturer', () => {
    describe('constructor(skills)', () => {
        it('should initialize instance', () => {
            const skills = ['frontend']

            assert.deepEqual(new Lecturer(skills)._skills, skills);
        })

        it('should initialize skills with empty array if parameter is missing', () => {
            const skills = ['frontend']

            assert.deepEqual(new Lecturer(skills)._skills, skills);
        })
    })

    describe('skills', () => {
        it('should return the lecturer skills', () => {
            const lecturer = new Lecturer()
            lecturer._skills = ['skill1', 'skill2']

            assert.deepEqual(lecturer.skills(), lecturer._skills);
        })
    })

    describe('matchTopics', () => {
        it('should return number of how many skills match the provided topics', () => {
            const lecturer = createLecturer(['topic1', 'topic2'])
    
            assert.strictEqual(lecturer.matchTopics(['topic1', 'topic2', 'topic3']), 2)
        })
    })
})

describe('Student', () => {
    describe('constructor(skillLevel)', () => {
        it('should initialize the instance', () => {
            assert.strictEqual(new Student(1)._skillLevel, 1)
        })
        it('should initialize skill with zero if parameter is missing', () => {
            assert.strictEqual(new Student()._skillLevel, 0)
        })
    })
    describe('skillLevel', () => {
        it('should return skill level', () => {
            const stud = createStudent(1)

            assert.strictEqual(stud.skillLevel(), 1)
        });
    })
})

describe('Course', () => {
    describe('constructor(students, lecturer)', () => {
        it('should initialize instance', () => {
            const students = [createStudent(), createStudent()]
            const lecturer = createLecturer()

            const course = new Course(students, lecturer)
            
            assert.strictEqual(course._students, students)
            assert.strictEqual(course._lecturer, lecturer)
        })
        it('should initialize students to empty array when parameter is missing', () => {
            const course = new Course()
            
            assert.isEmpty(course._students, [])
        })
        it('should initialize lecturer to null when parameter is missing', () => {
            const course = new Course([], undefined)
        
            assert.isNull(course._lecturer)
        })
    })

    describe('addStudent(student)', () => {

        it('should add the student to the course', () => {
            const student = new Student();
            const course = new Course();
            
            course.addStudent(student);

            assert.strictEqual(course._students.length, 1);
            assert.strictEqual(course._students[0], student);
        })

        it('should throw error if student is already added', () => {
            const student = createStudent();
            const course = createCourse();
            
            course.addStudent(student);

            assert.throws(() => c.addStudent(student));
        });
    });

    describe('addLecturer', () => {
        it('should add lecturer to the course when lecturer skills match 2/3 of topics', () => {
            const course = createCourse({topics: ['topic1', 'topic2', 'topic3']})
            const lecturer = createLecturer(['topic1', 'topic2'])

            course.addLecturer(lecturer)

            assert.strictEqual(course._lecturer, lecturer)
        })

        it('should not add lecturer to the course when lecturer do not match 2/3 of topics', () => {
            const course = createCourse({topics: ['topic1', 'topic2', 'topic3']})
            const lecturer = createLecturer(['topic1'])

            course.addLecturer(lecturer)

            assert.isNull(course._lecturer)
        })

        it('should throw error when course already has a lecturer', () => {
            const course = createCourse()
            course._lecturer = createLecturer()

            assert.throws(() => c.addLecturer(createLecturer()));
        });

    });
    
    describe('lecturer', () => {
        it('should return the lecturer added to a course', () => {
            const course = createCourse();
            const lecturer = createLecturer();

            course.addLecturer(lecturer)
    
            assert.strictEqual(course.lecturer(),lecturer);
        });

        it('should return null if no lecturer added to a course', () => {
            const c = new Course();
    
            assert.strictEqual(c.lecturer(), null);
        });

    });

    describe('students', () => {
        it('should return the students added to the course', () => {
            const course = createCourse()
            course._students = [createStudent()]
            
            assert.strictEqual(course.students().length, 1);
            assert.strictEqual(course.students()[0], course._students[0]);
        });
    });

    describe('canStart', () => {
        it('should return true if student number is sufficient and lecturer is added', () => {
            const course = new Course()
            course._minStudentCount = 2
            course._students = [createStudent(), createStudent()]
            course._lecturer = createLecturer()

            assert.isTrue(course.canStart());
        });

        it('should return false if student number is insufficient', () => {
            const course = new Course()
            course._minStudentCount = 2;
            course._students = [createStudent()]
            course._lecturer = createLecturer()

            assert.isFalse(course.canStart());
        });

        it('should return false if lecturer is not added', () => {
            const course = new Course()
            course._minStudentCount = 2;
            course._students = [createStudent(), createStudent()]

            assert.isFalse(course.canStart());
        });
    });

});

function createLecturer(skills) {
    const lecturer = new Lecturer()
    lecturer._skills = skills || []
    return lecturer
}

function createStudent(skillLevel) {
    const student = new Student()
    student._skillLevel = skillLevel || 0
    return student
}

function createCourse(options) {
    options = options || {}
    const course = new Course()
    course._students = options.students || []
    course._lecturer = options.lecturer || null;
    course._minStudentCount = options.minStudentCount || 0
    course._topics = options.topics || []
    return course
}
