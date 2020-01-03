class Restaurant {
    constructor(dishes) {
        this._dishes = dishes;
    }

    recommendations(dispreferences) {
        let result = [];
        for(let i = 0; i < this._dishes.length; i++) {
            if (this._dishes[i].containsAny(dispreferences) === false) {
                result.push(this._dishes[i]);
            }
        }

        return result;
    }
}

module.exports = Restaurant;