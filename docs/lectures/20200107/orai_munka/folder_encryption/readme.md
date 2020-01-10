# Hazi feladat

Az `folder_encryption/index.js`-be dolgozz! A cel csak az export import gyakorlasa.


## test

Ahhoz hogy meggyozodjunk arrol, hogy minden jol mukodik, letrehoztam egy teszt mappat, amibe beraktam par tesztesetet.
A `package.json`-ban pedig felvettem hozza egy scriptet.

Futtashoz adjuk ki a `npm test` parancsot. Ha minden zold, akkor mehet a bekuldes.

### Megjegyzes

`Object<String, String>` a docsban azt jelenti h az objektum kulcsa es erteke is `String` tipusu.

A feladat megoldasahoz hasznaljuk a `fileReadSync` nevu metodust az `fs` modulebol. Ezt is az ES6 importal huzzuk be.
File letezes vizsgalatahoz hasznaljuk a `existsSync` fuggvenyt az `fs` modulebol.

Kezdjuk a feladatot azzal, hogy az `folder_encryption/index.js` hozzuk letre a ket metodust urest bodyval es exportaljuk ki.
Utana mar a testeket futtatva latjuk hogy jol dolgozunk e vagy sem.

## encodeAll

Exportaljunk egy `exportAll` nevu fuggvenyt, mindegy hogy nevvel ellatott fuggveny, vagy arrow.
A fuggveny encodolja az osszes parameterkent kapott file tartalmat, es mentese el egy objektumba.
Ha nem letezik a file neve, akkor az objektumban legyen a filenevhez tartozo ertek ures string.
Visszateresi ertek legyen ez az objektum.

```
/**
 * Parameterkent egy stringekbol allo tombot kap, amelyek file path-ok
 * visszateresi ertek pedig egy objektum, aminek a kulcsa a parameterbol kibontott file path, erteke pedig az encodolt tartalom
 * 
 * @param  {String[]} fileNames 
 * @returns {Object<String, String>}
 */
```

## decodeAll

Exportaljunk egy `decodeAll` nevu fuggvenyt, mindegy hogy arrow vagy nevvel ellatott fuggveny. 
A fuggveny decodolja az osszes parameterben kapott file tartalmat es mentese el egy objektumba.
Ha nem letezik a file neve, akkor az objektumban legyen a filenevhez tartozo ertek ures string.
Visszateresi erteke legyen ez az objektum.

```
/**
 * 
 * @param  {String[]} fileNames
 * @returns {Object<String, String>} 
 */
```
