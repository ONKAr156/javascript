const arr = [1, 0, 2, 3, 0, 4, 0, 1]
const printZeroAtLast = (arr) => {
    const nw = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            nw.push(arr[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            nw.push(arr[i])
        }
    }

    return console.log(nw);
}
printZeroAtLast(arr)

