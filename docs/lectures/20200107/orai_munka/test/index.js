import {encodeAll, decodeAll} from '../folder_encryption/index.js';


assert('encode be tud olvasni tobb filet', () => {
    const encodedResult = encodeAll('./folder_encryption/files/sima1', './folder_encryption/files/sima2', './folder_encryption/files/titok1');

    return Object.keys(encodedResult).length === 3;
});


assert('nem letezo filenal nem dob exceptiont az encode', () => {
    const encodedResult = encodeAll('./folder_encryption/files/valamiaminincs');

    return encodedResult['./folder_encryption/files/valamiaminincs'] === '' ;
});

assert('nem letezo filenal nem dob exceptiont a decode', () => {
    const decodedResult = decodeAll('./folder_encryption/files/valamiaminincs');

    return decodedResult['./folder_encryption/files/valamiaminincs'] === '' ;
});


assert('encodolt result ket kulcsot tartalmaz', () => {
    const encodedResult = encodeAll('./folder_encryption/files/sima1', './folder_encryption/files/sima2');

    return Object.keys(encodedResult).length === 2;
});

assert('decodolt result ket kulcsot tartalmaz', () => {
    const decodedResult = decodeAll('./folder_encryption/files/titkos1', './folder_encryption/files/titkos2');

    return Object.keys(decodedResult).length === 2;
});

assert('sima1 file eredmenye: He__# m#r_1!!!', () => {
    const encodedResult = encodeAll('./folder_encryption/files/sima1', './folder_encryption/files/sima2');

    return encodedResult['./folder_encryption/files/sima1'] === 'He__# m#r_1!!!';
});

assert('titkos1 file eredmenye: Hello world!!!', () => {
    const decodedResult = decodeAll('./folder_encryption/files/titkos1', './folder_encryption/files/titkos2');

    return decodedResult['./folder_encryption/files/titkos1'] === 'Hello world!!!';
});

function assert(msg, callback) {
    const success = '✅';
    const failed = '❌';
    let isEqual = false;

    try {
        isEqual = callback();
    } catch(e) {
        console.log(e.toString());
    }
    
    console.log(`[ ${ isEqual ? success : failed} ] -- ${msg}`);
}
