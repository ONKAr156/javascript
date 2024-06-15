const arr = [1, 2, 3, 4, 5]
const rotateArrayDynamic = (arr, n) => {

    let nw = []
    const num = arr.slice(arr.length - n, arr.length)
    nw = num
    for (let i = 0; i < arr.length - n; i++) {
        console.log(arr[i]);
        nw.push(arr[i])
    }

    return console.log(nw);
}
rotateArrayDynamic(arr, 2)

