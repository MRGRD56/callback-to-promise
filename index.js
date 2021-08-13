function getNumber(number, delay, numberCallback) {
    setTimeout(() => {
        numberCallback?.(number);
    }, delay);
}

function printNumber(number, delay) {
    getNumber(number, delay, n => {
        console.log(n);
    });
}


function getNumberAsync(number, delay) {
    return new Promise(resolve => {
        getNumber(number, delay, n => {
            resolve(n);
        });
    });
}

async function printNumberAsync(number, delay) {
    const n = await getNumberAsync(number, delay);
    console.log(n);
}

(async () => {
    printNumber(1, 200); //can't await
    console.log("---1")
    await printNumberAsync(2, 100); //can await
    console.log("---2")
})();

// -- OR --

// printNumber(1, 200);
// console.log("---1")
// printNumberAsync(2, 100).then((() => {
//     console.log("---2")
// }));
