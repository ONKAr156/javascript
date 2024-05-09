const arr = [1, 2, 3, 4, 5]
// Expected op = [2,3,4,5,1]

const shiftLeft = (arr, n) => {
    const temp = arr[0]

    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i]
    }
    arr[n - 1] = temp

    console.log(arr);
}


shiftLeft(arr, 1)