# 2020. január 04., szombat


[előző alkalom](../20191221) [következő alkalom](../20200107)

# Modern JavaScript

<!--

terv

- ECMAScript vs. JavaScript
- ES6/ES2015
    - arrow function
    - let, const, temporal dead zone
    - rest és spread operator
        - variadic functions
    - desctructuring
        - objektumra
        - tömbre

- temporal dead zone
- ES9/ES2019
- ES.Next
- tc39, proposalok
- blokk scope
- lexical this
- default függvény paraméterek

-->



# Összefoglaló

- ECMAScript vs. JavaScript
- ES6/ES2015
- arrow function
- rest és spread operator
- desctructuring
    - objektumra
    - tömbre



# ESLint

Statikus kód analizáló eszköz, ún. linter, amely programozási hibákat hivatott felderíteni, például:

- használaton kívüli változók
- potenciális hibákat megengedő konstrukciók

Statikus, mert nem szükséges futtatni a kódot az elemzéshez.


📜❕Scotch: [https://scotch.io/tutorials/linting-and-formatting-with-eslint-in-vs-code](https://scotch.io/tutorials/linting-and-formatting-with-eslint-in-vs-code)

📜freeCodeCamp: [https://www.youtube.com/watch?v=qhuFviJn-es](https://www.youtube.com/watch?v=qhuFviJn-es)

📜🧠Wikipedia: [https://en.wikipedia.org/wiki/Static_program_analysis](https://en.wikipedia.org/wiki/Lint_(software))

📜Wikipedia: [https://en.wikipedia.org/wiki/Lint_(software)](https://en.wikipedia.org/wiki/Lint_(software))

# Arrow function: `() => {}`

📜❕MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

📜❕Mozilla Hacks: [https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

📘Exploring ES6: [https://exploringjs.com/es6/ch_arrow-functions.html](https://exploringjs.com/es6/ch_arrow-functions.html)


📹Tyler McGinnis: [https://www.youtube.com/watch?v=dB1KA-yz65s](https://www.youtube.com/watch?v=dB1KA-yz65s)

📹Fireship: [https://www.youtube.com/watch?v=gigtS_5KOqo](https://www.youtube.com/watch?v=gigtS_5KOqo)

# Rest paraméterek és spread operátor: `function f(...x) {}, f(y...)`

📜MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

📜MDN: [https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-defaults/](https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-defaults/)

📹Colt Steele: [https://www.youtube.com/watch?v=pYI-UuZVtHI](https://www.youtube.com/watch?v=pYI-UuZVtHI)

📹freeCodeCamp: [https://www.youtube.com/watch?v=iLx4ma8ZqvQ](https://www.youtube.com/watch?v=iLx4ma8ZqvQ)

📜David Walsh: [https://davidwalsh.name/spread-operator](https://davidwalsh.name/spread-operator)

📜🧠Wikipedia: [https://en.wikipedia.org/wiki/Variadic_function](https://en.wikipedia.org/wiki/Variadic_function)


# Destructuring: `[a, b] = [1, 2]`, `{a, b} = {a: 1, b: 2}`

📜MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

📜Mozilla Hacks: [https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)

