function digitize(n) {
    let nString = n.toString();
    let nReversedArray = [];
    for (let i = 0; i < nString.length; i++) {
        nReversedArray.unshift(Number(nString[i]));
    }
    return nReversedArray;
}