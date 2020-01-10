# Válaszold meg a kérdéseket

Válaszonként 1 pont

---

Mik azok az operátorok?

---

Mi az a shadowing? 

---
Mi az a konkatenáció

---

Mi a különbség a ++i és az i++ között?

---

Mi az alapértelmezett értéke egy inicializálatlan változónak?

---

Mi a különbség a null és az undefiend között?

---

Mit jelent az, hogy egy érték truthy vagy falsy? 

---

Mire a különbség a typeof és az instanceof között? 

---

Mire való a new?

---

Mi a különbség a constructor és a konstruktor függvény között? 

---

Mit jelent az, hogy a függvények elsőrendű nyelvi elemek?

---

Mi az a rekurzíó? 

---

Mire való a break utasítás? 

---

Mire való a continue utasítás?

---

 
Mire való a finally? hogy használjuk? 

---

Mit jelent az, hogy a switch lecsorgó (fallthrough)? 

---



# Mutass rá a hibára és indokold meg, miért működik hibásan a program és írd le a javítást!

Hiba azonosítása 1 pont

Helyes indoklás 1 pont

Helyes javítás 1 pont

---

```js
let i = 0;
while(i < 10); {
   console.log(i);
}
```
## Indoklás
## Javítás
---

```js
for(const i = 0; i < 10; i++) {
  console.log(i)
}
```
## Indoklás
## Javítás
---

```js
let eredmeny
for(let i = 0; i < 10; i + 1) {
  eredmeny = i;
 }

```

## Indoklás
## Javítás
---

```js
// main.js
const hello = require('./hello')
console.log(hello())

// hello.js
exports = function() { return 'hello' }
```
## Indoklás
## Javítás
---

```js
//main.js
const text = require('/text')
console.log(text)

// text.js
exports.text = "hello"
```
## Indoklás
## Javítás
---

```js
//main.js
const adder = require('./util').addder
console.log(addder(2,3))

//util.js
function addder(a, b) {
  return a + b
}

exports.addder = adder
```
## Indoklás
## Javítás
---

```js
let class = {
  constructor(name) {
    this.name = name
  }

  hi() { return `Hi, my name is ${this.name}` }
}
```
## Indoklás
## Javítás
---

```js
class A {
  constructor(name) {
    this.name = name
  }
}

class B extends A {
    constructor(age) {
        this.age = age
    }   
}
```
## Indoklás
## Javítás
---

```js
class A {
  constructor(age) {
    age = 0
  }
}
```
## Indoklás
## Javítás
---

```js
function r(n) {
  return r(n+1)
}
```
## Indoklás
## Javítás
---

# Jelöld meg az igaz kifejezéseket!

Válaszodat az opció végére írt 👈 emojival jelöld, például

> Mi az élet értelme?
>
> 1. élet értelme 42
> 2. programozás
> 3. mindkét válasz helyes 👈


Helyes válasz 1 pont

__Helytelen válasz -1 pont!__

---

1. {} == false
1. [] == false
1. 'true' == true
1. 'false' == false
1. 0 == false
1. null === false
1. !undefined === true
1. !!1 == true

---

1. "foo" == "foo"
1. "foo" === "foo"
1. 5 == "5"
1. 5 === "5"
1. [1] == [1]
1. [1] === [1]
1. undefined == null
1. undefined === null
1. null === null
1. NaN === NaN

# Mi lesz a kifejezés eredménye és miért?

Válaszodat az opció végére írt 👈 emojival jelöld. Az indoklás egyszerű szövegként mehet a feladat szekciójába, például

> Mi lesz a kifejezés eredménye?
>
> ```js
> const fizu = 80000
> let eredmeny = fizu * 10
> ```
> 1. boldogság
> 2. hiba 👈
>
> ## Indoklás
> a const miatt a fizu nem módosítható

Helyes válasz 1 pont

__Helytelen válasz -1 pont!__

Indoklás 1 pont

---

```js
const c = 10
c++

let eredmeny = c
```

1. 11
1. 10
1. hiba

## Indoklás

---
```js
const t = []
t.push(10)

let eredmeny = t.length
```

1. 1
1. 0
1. hiba

## Indoklás


---

```js
let s = "123"
 
let eredmeny = s[2]
```

1. "3"
1. 3
1. hiba


## Indoklás

---

```js
let s = "123"
s[0] = "10"

let eredmeny = s
```

1. "123"
1. "1023"
1. hiba

## Indoklás


---
```js
let a = 5

function f(a) {
  let a = 10
  return a
}

let eredmeny = f(7)
```

1. 10
1. hiba
1. 5

## Indoklás



---

```js
const a = 10

function f(a) {
  a = 15
}

let eredmeny = f(a)
```

1. undefined
1. 15
1. hiba

## Indoklás
---

```js
function add(a, b) {
    console.log(a + b)
}

let eredmeny = add(2, 3)
```

1. 5
1. undefined
1. hiba


## Indoklás
---

```js
function add(a, b) {
  return console.log(a + b)
}

let eredmeny = add(2, 3)
```

1. 5
1. undefined

## Indoklás
---

```js
function() {
  return "hello"
}

let eredmeny = f()
```

1. "hello" 
1. hiba


## Indoklás
---

```js
let eredmeny = 3
function g(f) {
  return f(1);
}

function f(g) {
  eredmeny = g(function(){ return 2 })
}

f(function(g) { return 3 })
```

1. 1
1. 2
1. 3
1. végtelen rekurzió

## Indoklás
---

```js
let eredmeny = false || 3

```

1. true
1. 3
1. hiba

## Indoklás
---
```js
let a = 5
function f() {
  a = 10
}

let eredmeny = a
f()
```

1. 5
1. 10

## Indoklás

---

