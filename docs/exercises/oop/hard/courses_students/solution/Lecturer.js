class Lecturer {
    constructor(skills) {
        this._skills = skills || []
    }

    skills() {
        return this._skills
    }

    matchTopics(topics) {
        let count = 0
        for (let i = 0; i < topics.length; i++) {
            if (this._skills.includes(topics[i])) {
                count++
            }
        }
        return count;
    }
}

module.exports = Lecturer