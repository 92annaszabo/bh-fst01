export default class Person {

    constructor(name) {
        this.name = name;
        this.canIReadSecrets = false;
    }

    /**
     * @param {String} text 
     */
    read(text) {
        console.log(`normal read: ${text}`);
    }
    
    /**
     * @param {String} text 
     * @returns {String}
     */
    write(text) {
        return text;
    }
}
