import Person from "./person.js";
import { decode, encode } from "../utils/index.js";


export default class Caesar extends Person {
    constructor() {
        super('Caesar');

        this.canIReadSecrets = true;
    }

    /**
     * @override
     * @param {String} text 
     */
    read(text) {
        const normal = decode(text);
        console.log(`Caesar reads: ${normal}`);
    }

    /**
     * @override
     * @param {String} text
     * @returns {String} 
     */
    write(text) {
        return encode(text);
    }
}
