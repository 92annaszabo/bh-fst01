const IllegalState = require('./errors/IllegalState');

class BoxClub {
    constructor(boxers) {
        this._boxers = boxers || [];
    }

    boxers(weightClass) {
        if (!weightClass) return this._boxers;
        
        return this._boxers.filter(b => b.weightClass() === weightClass);
    }

    sign(boxer) {
        const club = boxer.club();
        if (club === this || club) throw new IllegalState();

        this._boxers.push(boxer);

        return this._boxers;
    }

    breakUp(boxer) {
        const idx = this._boxers.findIndex(b => b === boxer);
        if (idx === -1) throw new IllegalState();

        this._boxers.splice(idx, 1);

        return this._boxers;
    }
}

module.exports = BoxClub;