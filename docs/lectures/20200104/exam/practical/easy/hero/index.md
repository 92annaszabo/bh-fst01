# Hero


Csinaljunk egy `hero` osztalyt.

A `name`, `powerLevel` es `life` private propertyk ami, az adott hero neve, tamadoereje es eletereje.


## constructor(name: string, powerLevel: number, life: number)

Ha a `name` nincs megadva, vagy falsy ertek, hibát dob.

- `should throw error if name is missing`

Ha az `powerLevel` nincs megadva, hibát dob.

- `should throw error if powerLevel is missing`

Ha az `powerLevel` kevesebb mint 10, hibat dob.

- `should throw error if powerLevel < 10`

Ha az `life` nincs megadva, hibát dob.

- `should throw error if life is missing`

Ha az `life` kevesebb mint 100, hibat dob.

- `should throw error if life < 100`

## getHeroDetails()

Egy olyan objecttel ter vissza amiben visszaadjuk a kovetkezokat: name, powerLevel, life

- `should return the hero details`


## attack()

Visszaadja a powerLevelt.

- `should return the powerLevel`

## getHit(attackLevel: number)

Egy olyan method, amely var egy szamot (attackLevel) argumentkent, majd a megadott erteket kivonja a hero lifebol.

- `should argument must be a number`
- `should decrease the life`

## fury()

Noveli a powerLevel erteket 10%-al.

- `should return the powerLevel`


## bonus test case

Peldanyositani ket karatert akik harcolnak egymassal.
A harc a kovetkezobol all: hero1 attack fuggveny segitsegevel megsebzi hero2-ot

- `should be two heros with life and powerlevel`
- `should decrease life after hit`
