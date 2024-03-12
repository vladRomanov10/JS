const map = new Map()

map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'boolean')

console.log(map.get('1'))

const set = new Set()

const nike = {name: 'Nile', age: 29}
const rus = {name: 'Rus', age: 29}
const yarik = {name: 'Yaroslav', age: 29}

set.add(nike)
set.add(nike)
set.add(rus)
set.add(nike)
set.add(rus)
set.add(yarik)
set.add(yarik)

const guests = [nike, rus, yarik, rus, nike, yarik]

const setGuests = new Set(guests)

