# Fuel Refill

Modellezzünk egy benzinkút látogatási problémát.

# Pump

Egy töltőállomás. Két jellemzője van, a fajtája (fuelType) és, hogy
foglalt-e (available).

## constructor(fuelType: string, available: bool)

Inicializálja az objektumot. 

Ha nincs megadva fuelType vagy üres, hibát dob.

Ha nins megadva available, a pumpa alapból __foglalt__.

## fuelType(): string

Visszaadja a töltőállomáson tölthető üzemanyag fajtáját.

## isAvailable(): bool

Visszaadja, hogy a töltőállomás szabad-e.

# GasStation

## constructor(name: string, pumps: Pump[])

Inicializál egy benzinkutat.

Ha a name vagy a pumps hiányzik vagy üres, hibát dob.

## availablePump(fuelType): Pump | undefined

Visszatér az első szabad töltőállomással, amely a megadott fuelType üzemenanyagot szolgáltatja.

Ha nincs szabad töltőállomás vagy nincs a megadott fuelTypenak megfelelő állomás, undefined értékkel tér vissza

## name(): string

A benzinkút nevével tér vissza.

# FuelRefill

Egy üzemanyag feltöltési problémát reprezentál.

## options(gasStations: GasStation[], fuelTypes: string[]): Object

Egy objektummal tér vissza, amelynek a kulcsai a megdott üzemanyag fajták, a kulcsokon tárolt értékek pedig azoknak a benzinkutaknak a nevei, amelyeken jelen pillanatban tölthető az üzemanyag (van szabad töltőállomás az adott fajtából)

Például:

Ha a Station 1 és Station kutakon van 95-ös üzemanyag és mindkét fajtához van szabad állomás és a Station 2 kúton pedig 100-as üzemanyag, akkor a kiemenet: 

```js
{
    '95': ['Station 1', 'Station 2'],
    '100': ['Station 2']
}
```



