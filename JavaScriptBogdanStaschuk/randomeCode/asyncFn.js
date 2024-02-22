const asyncFn = async () => {
    return 'Success!'
}

asyncFn()
    .then(value => console.log(value))

const asyncFnError = async () => {
    throw new Error('There was an error!')
}

asyncFnError()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))