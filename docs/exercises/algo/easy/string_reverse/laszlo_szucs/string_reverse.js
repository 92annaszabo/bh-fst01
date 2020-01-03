function stringReverse(str) {
    let rev = '';

    for (let i = 0; i < str.length; i++) {
        rev += str[str.length - 1 - i];
    }

    return rev;
}

module.exports = {stringReverse};