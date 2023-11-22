function highAndLow(numbers) {
    const numbersArrayStr = numbers.split(' ');
    let numbersArray = []; 
    for (let i = 0; i < numbersArrayStr.length; i++) {
        numbersArray.push(Number(numbersArrayStr[i]));
    }
    const comparisonNumber = numbersArray.length - 1;
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
//
function highAndLow(numbers) {
    numbersArrayStr = numbers.split(' ');
    numbersArray = []; 
    for (let i = 0; i < numbersArrayStr.length; i++) {
        numbersArray.push(Number(numbersArrayStr[i]));
    }
    comparisonNumber = numbersArray.length - 1;
    numOfAdv = 0;
    theBiggestNum = 0;
    theLowestNum = 0;
    for (i = 0; i < numbersArray.length; i++) {
        for (z = 0; z < numbersArray.length; z++) {
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
highAndLow("8 8");