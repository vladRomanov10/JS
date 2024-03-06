const myObject = {
    name: 'Vlad',
    age: 29
}

Object.getOwnPropertyDescriptors(myObject)

Object.defineProperty(myObject, 'city', {
    value: 'Almaty',
    writable: false,
    enumerable: true,
    configurable: true
})

Object.defineProperty(myObject, 'weight', {
    value: 75
})