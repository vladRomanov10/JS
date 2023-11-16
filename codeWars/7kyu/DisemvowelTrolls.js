function disemvowel(str) {
    let strArray = Array.from(str);
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    for (let i = 0; i < str.length; i++) {
        for (let z = 0; z < vowels.length; z++) {
            if (strArray[i] === vowels[z]) {
                delete strArray[i];
            }
        }
    }
    return strArray.join('');
  }