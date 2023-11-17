function noSpace(x){
    let array = [];
    array.push(x);
    let arrayNoSpace = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== ' ') {
            arrayNoSpace.push(array[i]);
        }
    }
    return arrayNoSpace.join('');
}