const animal = {
    _hiddenName: 'Кот'
}

Object.defineProperty(animal, 'name', {
    get: function() {return this._hiddenName},
    set: function(value) {this._hiddenName = value}
})

const animal2 = {
    name: 'И здесь тоже кот'
}

console.log(animal.name)
console.log(animal2.name)

const myObject = {
    get name() {
        return this._name
    },
    set name(value) {
        this._name = value
    }
}

console.log(myObject.name)

myObject.name = 'Vlad'

console.log(myObject.name)

const updatedAt = {
    get date() {
        return this._date
    },
    set date(value) {
        this._date = value + 10
    }
}

updatedAt.data = new Date(2030, 11, 12)