function condmaxsearch(arr, cond) {
    if (arr.length === 0) return undefined;

    let max;
    let found = false;
    for(let i = 1; i < arr.length; i++) {
        if (cond(arr[i]) && !found) {
            found = true;
            max = arr[i];
            continue;
        }

        if (cond(arr[i]) && arr[i] > max) max = arr[i];
        
    }

    return found? max : undefined;
}

module.exports.condmaxsearch = condmaxsearch;