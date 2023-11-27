function descendingOrder(n){
    let numbers = n;
    let numArray = [];
    let numDescendingArray = [];
    let moreThan = 0;
    let repeatingNum = 0;
    if (numbers == 0) {
        return 0;
    }
    while (numbers >= 1) { 
        numArray.unshift(numbers % 10);
        numbers = Math.floor(numbers / 10);
    }
    for (let i = 0; i < numArray.length; i++) {
        for (let z = 0; z < numArray.length; z++) {
            if (numArray[i] > numArray[z]) {
                moreThan++;
            }
        }
        while (numArray[i] == numDescendingArray[(numArray.length -1) - (moreThan + repeatingNum)]) {
            repeatingNum++;
        }
        numDescendingArray [(numArray.length - 1) - (moreThan + repeatingNum)] = numArray[i];
        moreThan = 0;
        repeatingNum = 0;
    }
    return +numDescendingArray.join('');
}