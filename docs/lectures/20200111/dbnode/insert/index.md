Legyen egy insert.js Node programunk

Az insert két paramétert vár

A első paraméter egy adatbázis tábla neve

A második paraméter pedig egy sor adatait tartalmazó JSON string

A program fixen egy mydb nevű adatbázis fájlba ír!!!!

pl.

$ node insert.js employee '{"id":1,"name":"Margint"}'

Ha a megadott táblában létezik már sor, a megadott ID val,
a program kiírja, hogy az adatsor már létezik.

Alapesetben pedig, beírja a megadott táblába.

Feltesszük, hogy a táblák, rendelkezésre állnak.


Az adatmodell legyen az alábbi:

Employee
- id int
- name VARCHAR(80)