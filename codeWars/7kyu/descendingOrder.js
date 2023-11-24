function descendingOrder(n){
    let numbers = n;
    let numArray = [];
    let numDescendingArray = [];
    let moreThan = 0;
    let repeatingNum = 0;
    if (numbers == 0) {
        return 0;
    }
    while (numbers >= 1) { //Нужно пересобрать часть кода, где число преобразуется в массив
        numArray.unshift(numbers % 10);//сейчас проблема с числом 01, оно не преобразуется в
        numbers = Math.floor(numbers / 10);// 0 и 1, а делается как 1
    }
    for (let i = 0; i < numArray.length; i++) {
        for (let z = 0; z < numArray.length; z++) {
            if (numArray[i] > numArray[z]) {
                moreThan++;
            }
        }
        if (numDescendingArray [(numArray.length - 1) - moreThan] == numArray[i]) {
            repeatingNum--;
            numDescendingArray [(numArray.length - 1) - (moreThan + repeatingNum)] = numArray[i];
        }
        numDescendingArray [(numArray.length - 1) - moreThan] = numArray[i];
        moreThan = 0;
    }
    return +numDescendingArray.join('');
}
//------
function descendingOrder(n){ // я хз че сделать, у меня в голове и на бумажке все работает
    numbers = n; 
    numArray = [];
    numDescendingArray = [];
    moreThan = 0;
    repeatingNum = 0
    if(numbers == 0) {
        return 0;
    }
    while (numbers >= 1) {
        numArray.unshift(numbers % 10);
        numbers = Math.floor(numbers / 10);
    }
    for (i = 0; i < numArray.length; i++) {
        for (z = 0; z < numArray.length; z++) {
            if (numArray[i] > numArray[z]) {
                moreThan++;
            }
        }
        while (numArray[i] == numDescendingArray[(numArray.length -1) - (moreThan + repeatingNum)]) {
            repeatingNum--;
        }
        numDescendingArray [(numArray.length - 1) - (moreThan + repeatingNum)] = numArray[i];
        moreThan = 0;
        repeatingNum = 0;
        z = 0;
        }
        return +numDescendingArray.join('');
}