import { encode, decode } from "./utils/index.js";
import Person from "./person/person.js";
import Caesar from "./person/caesar.js";

const normalText = "Hello world";

const secretText = encode(normalText);
console.log(`create secret: ${normalText} -> ${secretText}`);

const normalTextAgain = decode(secretText);
console.log(`decode: ${secretText} -> ${normalTextAgain}`);

const normalPerson = new Person('Csaba');
normalPerson.read(secretText);

const caesar = new Caesar();
caesar.read(secretText);

const secretTextFromCaesar = caesar.write('ez lesz az uj titkos szoveg');
console.log(secretTextFromCaesar);