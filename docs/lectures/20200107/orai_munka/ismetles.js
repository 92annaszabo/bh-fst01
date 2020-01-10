/* eslint-disable no-unused-vars */

const heroes = {
    marvel: ['Mar Vel', 'Thor', 'Black Widow', 'Spiderman'],
    dc: ['Batman', 'Green Arrow', 'Superman', 'Flash'],

    f: function() {
        // todo...
    },

    g() {
        console.log(`this is g, and heroes are: ${this.marvel}`);
    },

    arrowFunction: () => {
        console.log(`there is no this here ${this.marvel}`);  // this nem ide mutat, hanem a windowra itt
    }
};

heroes.g();  // short syntax, === g: functiomn() { ... }

heroes.arrowFunction();

const getDcHeroes = () => {
    const {dc} = heroes;  // === const dc = heroes.dc;

    return dc;
};

const getFirstMarvelHero = ( { marvel } ) => marvel[0]; 

const getFirstMarvelHero2 = ( [a, b, c] ) => { 
    console.log(a, b, c);  // marvel[0], marvel[1], marvel[2]
};


const dcHeroes = getDcHeroes();
console.log(dcHeroes);

const firstHero = getFirstMarvelHero(heroes);  // heroes.marvel
console.log(firstHero === 'Mar Vel');

const {marvel, dc} = heroes;
const [a,b,c] = heroes.marvel; // marvel[0], marvel[1], marvel[2]


// module.exports = { heroes };  // === { heroes: heroes }
// ehelyett exportot hasznalunk