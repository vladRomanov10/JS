function positiveSum(arr) {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === 1) {
            arrSum +=arr[i]
        }
    }
    return arrSum;
};