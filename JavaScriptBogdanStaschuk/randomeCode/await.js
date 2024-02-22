const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            return resolve()
        }, 20000));