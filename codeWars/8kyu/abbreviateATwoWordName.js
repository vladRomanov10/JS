function abbrevName(name){
    let firstLetter = '';
    let lastLetter = '';
    let stopPoint = 0;
    for (let i = 0; i < name.length; i++) {
        if (stopPoint == 1) {
            lastLetter += name[i].toUpperCase();
            break;
        }
        if (i == 0) {
            firstLetter += name[0].toUpperCase() + '.';
        }
        if (name[i] == ' ') {
            stopPoint++;
        }
    }
    return firstLetter + lastLetter;
}