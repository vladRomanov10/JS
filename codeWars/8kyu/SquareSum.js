function squareSum(numbers){
    let squareNum = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        squareNum.push(numbers[i] * numbers[i]);
    }
    for (let i = 0; i < squareNum.length; i++) {
        sum += squareNum[i];
    }
    return sum;
}