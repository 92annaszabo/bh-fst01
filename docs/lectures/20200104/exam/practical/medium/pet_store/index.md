# Pet Store

Modelezzünk egy kisállat kereskedést.

# Pet

Egy házikedvencet leíró osztály.

A házikedvenceket a nevük és fajtájuk jellemzi.

## constructor(name: string, species: string)

Inicializálja a házikedvencet. Hibakezeléstől és alapértékektől eltekintünk.

# PetStore

## constructor(pets: Pet[])

Inicializálja a kereskedést a benne található kisállatokkal. Hibakezeléstől és alapértékektől eltekintünk.

## listPets(species: string): Pet[]

Listázza a species fajtájú állatokat.

- `should return list of pets of species`

Ha nem található a megadott fajtájú kedvenc, üres tömbbel tér vissza

- `should return empty list when no pet is found from species`

Ha nincs megadva a species, az összes állatot visszaadja.

- `should return list of all pets when species is missing`

## buy(name: string): Pet

Megvásárol egy kedvencet. 

A kedvencet a neve alapján választjuk ki. Feltételezzük, hogy csak egy kedvenc van adott névvel.

A vásárlás után a kedvencet eltávolítjuk a kereskedésből!

- `should remove the pet called by name from the pet store`

Ha nem található a megadott nevű kedvenc, hibát dobunk.

- `should throw error if no pet is found by name `

Ha nem adtunk meg name paramétert, hibát dobunk.

- `should throw error if pet parameter is missing`

A hívás a megvásárolt kedvenccel tér vissza

- `should return the pet bought`

