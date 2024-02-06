const fnWitherror = () => {
    throw new Error ('Some error')
}

try {
    fnWitherror()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('continue...')