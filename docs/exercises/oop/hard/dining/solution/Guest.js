class Guest {

    constructor(dispreferences) {
        this._dispreferences = dispreferences;
    }

    dispreferences() {
        return this._dispreferences;
    }

}

module.exports = Guest;