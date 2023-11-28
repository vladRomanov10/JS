function getMiddle(s){
    const isSumLetEven = s.length % 2 == 0 ? true : false;
    if (isSumLetEven) {
        return s.slice(s / 2 - 1, s / 2 + 1);
    } else {
        if (s.length == 1) {
            return s;
        }
        return s[Math.floor (s.length / 2)];
    }
}