
/**
 * 
 * @param {Function} callback 
 */
function f( callback ) {
    console.log('csinalok valamit 0');
    console.log('csinalok valamit 1');
    
    callback('elso hivas');     // a mi esetunkben a callback === enLeszekACallback

    console.log('csinalok valamit 2');
    console.log('csinalok valamit 3');

    callback('masodik hivas');  // a mi esetunkben a callback === enLeszekACallback

    console.log('csinalok valamit 4');
}

function enLeszekACallback( stringParameter ) {
    console.log(`callback called: ${stringParameter}`);
}

function enLeszekACallbackVisszater( stringParameter ) {
    console.warn(`valami mast csinalok vele: ${stringParameter}`);
}

f(enLeszekACallback);  // () jelek nelkul adom meg, csak a fv nevet

f(enLeszekACallbackVisszater);  // () jelek nelkul adom meg, csak a fv nevet
