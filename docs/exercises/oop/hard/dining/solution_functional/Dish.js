class Dish {
    constructor(ingredients) {
        this._ingredients = ingredients;
    }

    containsAny(dislikeds) {
        // let found = false;
        // for(let i = 0; i < ingredients.length && !found; i++) {
        //     found = this._ingredients.indexOf(ingredients[i]) > -1;
        // }

        return dislikeds.reduce((found, disliked) =>
            this._ingredients.indexOf(disliked) > -1 || found,
            false
        );

        // return found;
    }
}

module.exports = Dish;