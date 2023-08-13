const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let promise2 = new Promise((resolve, reject) => {
            setTimeout(() => { resolve("PROMISE 2"); }, 1000);
        });
        resolve(() => promise2);
    }, 2000);
});

promise.then((value) => {
    return value()
})
    .then((value2) => {
        console.log(value2);
    })
    .catch((error) => {
        console.log(error);
    });
console.log("END");