const promiseOne = new Promise((resolve, reject) => {
    console.log("Promise One");
    setTimeout(resolve, 2000, "One");
});

const promiseTwo = new Promise((resolve, reject) => {
    console.log("Promise Two");
    resolve("Two");
});

const promiseThree = promiseOne.then((result) => {
    console.log("Promise Three");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "Three and: " + result);
    })
        .then(result => result + " first then,")
        .then(result => result + " second then,")
        .catch(error => {
            console.log("Three, oops! " + error);
        });
});

const promiseFour = promiseThree.then((result) => {
    console.log("Promise Four");
    return Promise.resolve("Four: " + result);
})

/*
Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then((result) => {
    console.log("All:");
    result.forEach((aResult) => {
        console.log("    " + aResult);
    });
})

Promise.race([promiseOne, promiseTwo, promiseThree, promiseFour]).then((result) => {
    console.log("Race: " + result);
})
*/

/*
const timeoutLoop = () => {
    setTimeout(() => {
        console.log("Extra!");
        new Promise((resolve, reject) => {
            console.log("Start Extra Promise");
            setTimeout(resolve, 1000, "Extra Resolution");
        })
            .then((result) => {
                console.log("Extra Then " + result);
            });
    }, 1000, "extra");
};

setInterval(timeoutLoop, 5000);
*/
setTimeout(console.log, 2000, promiseThree);
setTimeout(console.log, 5000, promiseThree);
