class Restaurant {
    constructor(dishes) {
        this._dishes = dishes;
    }

    recommendations(dispreferences) {
        return this._dishes.filter(d => !d.containsAny(dispreferences));
    }
}

module.exports = Restaurant;