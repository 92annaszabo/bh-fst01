
class Course {
    constructor(students, lecturer, minStudentsCount, topics) {
        this._students = students || [];
        this._lecturer = lecturer || null;
        this._minStudentCount = minStudentsCount || 0;
        this._topics = topics;
    }

    addStudent(student) {
        if (this._students.includes(student)) throw new Error();
        
        this._students.push(student);
    }

    addLecturer(lecturer) {
        if (this._lecturer) throw new Error();
        if (lecturer.matchTopics(this._topics) < (2 * this._topics.length / 3)) return

        this._lecturer = lecturer;
    }

    lecturer() {
        return this._lecturer;
    }

    students() {
        return this._students;
    }

    canStart() {
        return this._students.length >= this._minStudentCount && !!this._lecturer;
    }

}

module.exports = Course;