class Student {
    constructor(skillLevel) {
        this._skillLevel = skillLevel || 0
    }

    skillLevel() {
        return this._skillLevel
    }
}

module.exports = Student;