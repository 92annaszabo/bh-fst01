# Speaking JavaScript

## 07. Syntax

Mik azok a literálok? 

Hogy néz ki egy string literál? 

Hogy néz ki egy tömb literál? 

Hogy néz ki egy objektum literál? 

Mi az a komment? 

Hogy néz ki egy komment? 

Mik azok a kifejezések (expression) ? 

Mik azok az utasítások (statement) ? 

Mivel jelöljük az utasítások végét?

Mi az az automatikus pontosvesszőzés (automatic semicolon insertion)? 

Milyen esetekben hagyható el a pontosvessző az utasítások végéről? 

Mi az az üres utasítás (empty statement) ? 

Mik azok az azonosítók (identifier)? 

Milyen szabályok vonatkoznak az azonosítókra? 

Mi az kulcsszó (keyword)?

Mi az a foglalt szó (reserved word)? 

Lehet-e foglalt szó (pl. function) objektum literál kulcsa? 

Mi az a strict mode és sloppy mode? 

Hogyan váltunk strict modera? 


## 08. Values

Milyen adattípusokat ismer a JavaScript?

Mit jelent az, hogy egy nyelv statikusan típusos?

Mit jelent az, hogy egy nyelv dinamikusan típusos?

Mit jelent, hogy egy típus primitív típus?

Mit jelent, hogy egy típus referencia típus?

Melyek a primitív típusok JavaScriptben?

Mi az az undefined? 

Mi az a null? 

null == undefined?

null === undefined? 

Mik azok a wrapper típusok?

new String('abc') == 'abc'?

Mi az a típus kényszerítés (type coercion)?

Mit jelent az, hogy egy érték falsy, illetve truthy?

Melyek a falsy értékek? 

## 09. Operators

Mik azok az operátorok? 

Mi történik a referencia típusokkal, amikor egy operátor kötésében jelennek meg (pl. [1, 2] + [3, 4])?

Mi az értékadó kifejezések (assignment expression) kiértékelésének (evaluation) eredménye?

Mik azok az összevont értékadások (compound assignment) ?

Mi a különbség a megengedő egyenlőség vizsgálat ((lenient) equality) és a szigorú egyenlőség vizsgálat (strict equality) között?

NaN == NaN? 

NaN === NaN?

Milyen rendezési (ordering) operátorokat ismer a JavaScript?

Mit jelent a konkatenáció?

Melyik operátort használjuk konkatenációra?

Hogyan dől el, hogy a + összeadásként vagy konkatenációként fog működni? 

Hogy működik a || operátor?

Hogy működik a && operátor?

Hogy működik a ! operátor?

Mire jó a !! használata?

Mire jó a typeof operátor?

typeof undefined?

typeof null?

typeof {} == typeof []? Na és typeof {} === typeof []?

Mire jó az instanceof operátor?

undefined instanceof Object?

null instanceof Object?

Igaz-e, hogy egy primitív érték a wrapper példánya (pl . 5 instanceof Number, 'abc' instanceof String, ... )?

Igaz-e, hogy egy primitív érték az Object példánya (pl . 5 instanceof Object, 'abc' instanceof Object, ... )?

Igaz-e, hogy a wrapperek az Object példányai (pl . Number instanceof Object, String instanceof Object, ... )?



## 10. Booleans

Mit jelent az, hogy egy érték truthy illetve falsy?

Melyek a falsy értékek?

Melyek a truthy értékek?

Mi a jelentőssége a `!!someValue` alakú kifejezéseknek?

Mit csinál és hogyan működik a && operátor?

Mit csinál és hogyan működik a || operátor?

Mit csinál és hogyan működik a ! operátor?

Mi lesz az értéke a `value` változónak a `const value =  'foobar' || false` végrehajtása után és miért?

Mit jelent az, hogy a logikai operátorok rövidzár (short-circuit) elven működnek? Írj példát is!

Hogyan tudunk egy változónak alapértelmezett értéket szolgáltatni logikai operátor használatával? Miért működik a módszer?

Milyen módszereket ismersz értékek manuális logikai értékké konvertálására?

## 11. Numbers

Sorold fel a JavaScript által ismert szám típusokat!

Mi a jelentőssége a lebegőpontos (floating point) számoknak?

Hogyan értelmezendő a `2e8` literál?

Melyik kifejezés a helyes és miért: `123.toString()` vs. `123 .toString()`?

Mi a számmá konvertált értéke a következő értékeknek: `undefined`, `null`, `false`, `true`, `5`, `''`, `'123'`, `'foobar'`?

Mi a számmá konvertált értéke a `{valueOf: function(){ return ''; }}` objektumnak és miért?

Mi a különbség a `parseInt('123foo')` és `Number('123foo')` kifejezések között?

Milyen típusú érték a `NaN`?

Mi lesz a `Nan + 3` kifejezés értéke?

`NaN == NaN`? `NaN === NaN`? 

Hogyan tudjuk megállapítani, hogy változó értéke `NaN`?

Mi a probléma az `isNaN('xyz')` kifejezéssel?

Mi lesz eredménye az `0/0` és `1/0` kifejezéseknek és miért?

Milyen esetekben kaphatunk `Infinity` értéket?

Mire jó az `isFinite` függvény?

Igaz-e, hogy `0.1 + 0.2 === 0.3`? Válaszod indokold meg!

Mire való a `Math.floor`, `Math.ceil` és `Math.round`?

Szemléltesd példával, hogy mi a különbség a `i++` és `++i` kifejezések között!

Mi a különbség a `parseInt` és `parseFloat` globális függvények között?

## 12. Strings

Mi a különbség az aposztrófokkal (`'`) és az idézőjelekkel (`"`) megadott string literálok között? Miért használnánk egy fájlban vegyesen őket?

Szemléltesd példával, hogy mit nevezünk escapingnek a string literálok viszonylatában!

Hogyan értelmezendő a `"\n"` string literál?

Hogyan tudunk egy stringen belül egy konkrét karakterre hivatkozni?

Mi lesz az értéke a `String(false)` és `Boolean('false')` kifejezéseknek és miért?

Mi lesz az értéke a `String(false)` és `Boolean('false')` kifejezéseknek és miért?

Mi lesz az értéke a `'A' > 'B'` és `'a' > 'B'` kifejezéseknek?

Mit nevezünk konkatenációnak?

Hogyan tudjuk megállapítani egy string hosszát?

Mire való a `substring` metódus? Írj példát is!

Mire való a `split` metódus? Írj példát is!

Mire való az `indexOf` metódus? Írj példát is!

## 13. Statements

Mely kulcsszavakkal tudunk változót deklarálni?

Hogyan tudunk egyszerre több változót deklarálni?

Mi az az utasítás blokk (block statement)?

Mi történik, ha az alábbi kódrészletből elhagyjuk a kapcsos zárójeleket?

```
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}
```

Hogy viselkedik a `break` és `continue` egy ciklusban?

Mi a különbség a `while` és `do-while` ciklusok között?

Hogyan néz ki egy `for` ciklus általános szerkezet? Melyik komponensnek mi a rendeltetése?

Mit ír le a `for(;;)` szerkezet?

Mire használható a `for-in` ciklus?

Mire való a `Object.prototype.hasOwnProperty` metódus?

Mire kell figyelni, ha egy objektum kulcsait a `for-in` ciklussal járjuk be?

Miért nem ajánlott `for-in` ciklussal bejárni egy tömböt?

Hány else if ágat írhatunk egy elágazásba?

Melyik else melyik ifhez tartozik az alábbi példában?

```js
if (condition1) if (condition2) else console.log('tricky!');

if (condition1)
    if (condition2)
else console.log('tricky!');
```

Mire való a switch?

Miért kell a break utasítást a switch ágainak a végére?

Mikor nem kell break a switch végére?

Hogy működik a switch default ága? Mi történik, ha nem adtunk meg default ágat?


Melyik switch szabályos szintaktialag?

```js
// 1)
switch(true) {
    case false: console.log('false')
}

// 2)
switch(false) {
    case false: break; console.log('false')
}

// 3)
const n = 5;
switch(n) {
    case 5:
        console.log(5);
        break;
    default:
        console.log('default');
        break;
}
```
## 14. Exception handling

# Exploring ES6

## 8. Template literals

Mik azok a template literálok? 

Mi a különbség egy sztring és egy template literál között?

Mi az a (sztring) interpoláció?

Hogyan tudok ` karaktert írni egy template literálba?

## 9. Variables and scoping

Mi a különbség a let a const és a var között?

Mit jelent az, hogy a let és a const blokk szinten láthatóak, míg a var függvény szinten?

Hozzáadhatunk-e egy elemet egy consttal deklarált tömb?

Mire való az Object.freeze?

Miért szabálytalan az const használata első ciklusban és miért szabályos a másodikban?

```js
for (const i = 0; i < arr.length; i++) {
    // ...
}

for (const i in arr) {
    // ..
}
```

Mi az a temporal dead zone?

Mire jó és hogyan működik az alábbi kódrészlet?

```js
if (someCondition) {
    var someVar = 42;
}

console.log(someVar);
```










