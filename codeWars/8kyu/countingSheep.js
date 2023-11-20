function countSheeps(sheep) {
    numOfSheeps = sheep.length;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] == null || sheep[i] == undefined || sheep[i] == false) {
            numOfSheeps --;
        }
    }
    return numOfSheeps;
}