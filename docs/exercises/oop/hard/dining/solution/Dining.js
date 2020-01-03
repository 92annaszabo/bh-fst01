class Dining {
    constructor(guests, restaurants) {
        this._guests = guests;
        this._restaurants = restaurants;
    }

    options() {

        let results = [];

        for (let i = 0; i < this._restaurants.length; i++) {
            const restaurant = this._restaurants[i];
            let ok = true;

            for (let j = 0; j < this._guests.length; j++) {
                const disprefs = this._guests[j].dispreferences();

                if (restaurant.recommendations(disprefs).length === 0) {
                    ok = false;
                }
            }

            if (ok) {
                results.push(restaurant);
            }
        }

        return results;
    }
}

module.exports = Dining;