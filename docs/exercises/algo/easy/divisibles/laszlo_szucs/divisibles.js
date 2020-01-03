function divisibles(arr, n) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] % n) === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}