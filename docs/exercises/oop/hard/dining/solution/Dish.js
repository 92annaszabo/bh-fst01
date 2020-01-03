class Dish {
    constructor(ingredients) {
        this._ingredients = ingredients;
    }

    containsAny(ingredients) {
        for (let i = 0; i < ingredients.length; i++) {
            if (this._ingredients.indexOf(ingredients[i]) > -1) return true;
        }

        return false;
    }
}

module.exports = Dish;