const arr = [1, 2, 3, 4, 5]
// Expected op = [2,3,4,5,1]

const shiftLeft = (arr, n) => {
    const temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - n] = arr[i]

    }

    arr[arr.length - 1] = temp
    console.log(arr);
}


shiftLeft(arr, 1)



