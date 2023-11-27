function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    classPoints.push(yourPoints);
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    return sum / classPoints.length < yourPoints ? true : false;
}