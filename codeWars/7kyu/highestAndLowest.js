function highAndLow(numbers) {
    const numbersArrayStr = numbers.split(' '); // Делаю из строки массив с строками
    const nonRepeatNumStr = new Set(numbersArrayStr); // Удалаяю с помошью new Set повтрояющиеся элементы
    const nonRepeatNumArrayStr = Array.from(nonRepeatNumStr); // Делаю из коллекции массив с строками
    let numbersArray = [];
    for (let i = 0; i < nonRepeatNumArrayStr.length; i++) { 
        numbersArray.push(Number(nonRepeatNumArrayStr[i])); // Перевожу массив из строк в цифры
    }
    let theBiggestNum = 0;
    let theLowestNum = 0;
    if (numbersArray.length == 1) {
        theBiggestNum = numbersArray[0];
        theLowestNum = numbersArray[0];
        return theBiggestNum.toString() + ' ' + theLowestNum.toString();
    }
    if (numbersArray.length == 2) {
        if (numbersArray[0] == numbersArray[1]) {
            theBiggestNum = numbersArray[0];
            theLowestNum = numbersArray[0];
            return theBiggestNum.toString() + ' ' + theLowestNum.toString();
        }
    }
    const comparisonNumber = numbersArray.length - 1;
    let numOfAdv = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        for (let z = 0; z < numbersArray.length; z++) {
            if (numbersArray[i] > numbersArray[z]) {
                numOfAdv++;
            }
        }
        if (numOfAdv == comparisonNumber) {
            theBiggestNum = numbersArray[i]
        } else if (numOfAdv == 0) {
            theLowestNum = numbersArray[i]
        }
        numOfAdv = 0;
    }
    return theBiggestNum.toString() + ' ' + theLowestNum.toString();
}