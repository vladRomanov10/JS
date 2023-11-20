function squareDigits(num){
    let numInString = num.toString();
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        numInString[i] = Number(numInString[i]);
        result += Math.pow(numInString[i], 2)
    }
    return result;
}