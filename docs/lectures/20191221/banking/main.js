const Bank = require('./Bank');
const Account = require('./Account');
const Person = require('./Person');

let b = new Bank();
let p = new Person("123456AB", "Steve Strong", 10000);

const acc = b.createAccount(p);
const acc2 = b.createAccount(p);

acc._balance = 10000;
acc2._balance = 20000;

console.log(p.collect(35000));

console.log(acc._balance);
console.log(acc2._balance);
console.log(p.cash);


