const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            return resolve()
        }, 2000));

const asyncFn = async () => {
    console.log('Timer starts')
    await timerPromise()
    console.log('Timer ended')
}

asyncFn()