const myProfile = {
    name: 'Vlad',
    age: 26,
    haveABike: true,
}

const myFunc = ( {name, haveABike} ) => {
    if (haveABike) {
        return `${name} has a bike`
    }
    return `${name} has no a bike`
}

console.log(myFunc(myProfile))