/*
const firstPromise = new Promise((resolve, reject) => {
    console.log("firstPromise promise");
    setTimeout(resolve, 2000, "done")
});

const b = async () => {
    setTimeout(console.log, 1000, "ok");
};
async function b () {
    await setTimeout(console.log, 1000, "ok");
};

firstPromise
    .then(() => {
        console.log("firstPromise then");
        b();
        return "well";
    })
    .then((data) => {
        console.log("second then " + data);
    })
    .catch(() => {
        console.log("oops");
    });
*/

// const c = b();

const firstThing = new Promise((resolve, reject) => {
    let myValue;
    let localPromise = new Promise((resolve, reject) => {
        setTimeout((param) => {
            myValue = param;
        }, 3000, "first")});
    console.log(myValue);
    resolve(myValue);
});

const secondThing = async () => {
    await console.log("second");
    return 2;
};

const thirdThing = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("third");
        resolve(3);
    }, 1000);
});

Promise.all([firstThing, secondThing, thirdThing])
    .then(data => {console.log("All: " + data)})
    .catch(error => {console.log("Oops")});
