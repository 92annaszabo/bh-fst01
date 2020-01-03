function bestStudents(courses) {
    let best = [];
    for(let i = 0; i < courses.length; i++) {
        best = best.concat(names(getBest(courses[i])));
    }

    return best;
}

function getBest(course) {
    if (course.length == 0) return [];

    let best = [course[0]];
    let max = course[0].score;

    for(let i = 1; i < course.length; i++) {
        if (course[i].score > max) {
            best = [course[i]];
            max = course[i].score;
            continue;
        }

        if (course[i].score === max) best.push(course[i]);
    }

    return best;
}

function names(students) {
    return students.map(s => s.name);
}

exports.bestStudents = bestStudents;