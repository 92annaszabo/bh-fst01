function arrayReverse(arr) {
    const rev = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }

    return rev;
}

module.exports = {arrayReverse};