class Dining {
    constructor(guests, restaurants) {
        this._guests = guests;
        this._restaurants = restaurants;
    }

    options() {
        return this._restaurants.filter(
            r => 
                this._guests.reduce(
                    (ok, g) => r.recommendations(g.dispreferences()).length && ok
                    ,true
                )
            );
    }
}

module.exports = Dining;