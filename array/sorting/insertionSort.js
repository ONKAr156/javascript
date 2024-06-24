const arr = [7, 2, 4, 6, 5, 1, 3]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = curr

    }
    return console.log(arr);


}


insertionSort(arr)