function highAndLow(numbers) {
    const numbersWithoutSpaces = numbers.replaceAll(' ', ''); //Проблема с переводом строковых двухначных и более цифр
    const numbersArray = Array.from(numbersWithoutSpaces); // в массив как числа, число 10 переводится как 1 и 0
    const comparisonNumber = numbersArray.length - 1; // нужно разбить строку через str.split(' ')
    let numOfAdv = 0;
    let theBiggestNum = 0;
    let theLowestNum = 0;
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
