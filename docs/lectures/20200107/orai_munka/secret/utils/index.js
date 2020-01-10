const secretTable = {
    a: 'b',
    b: 'c',
    l: '_',
    d: '1',
    w: 'm',
    t: 'g',
    o: '#'
};

/**
 * Jarjuk be a chars-t, csereljuk le a karaktereket
 * ha lehet, ha nem megtartjuk
 * 
 * visszaterunk az uj titkos szoveggel
 * 
 * @param {String} text 
 * @returns {String}
 */
export const encode = (text) => {
    const chars = [...text];

    const buffer = [];

    chars.forEach( (char) => {
        if (char in secretTable) {
            buffer.push( secretTable[char] )
        } else {
            buffer.push(char);
        }
    });

    // fenti sorokkal ekvivalens
    // const buffer2 = chars.map( char => secretTable[char] ? secretTable[char] : char );

    return buffer.join('');
};


/**
 * visszaalakitja a textet az eredeti alakra
 * 
 * @param {String} text 
 * @returns {String}
 */
export function decode(text) {
    const chars = text.split('');
    const visszaFele = {};
    const buffer = [];

    Object.entries(secretTable).forEach( ( [key, value] ) => {
        visszaFele[value] = key;
    } );

    chars.forEach( char => {
        if( char in visszaFele) { 
            buffer.push(visszaFele[char]);
        } else {
            buffer.push(char);
        }
    });

    return buffer.join('');
}
