const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
}

const pricesArray = Object.entries(prices)

pricesArrayDouble = pricesArray.map(([key, value]) => [key, value * 2])