const arr = [10, 5, 47, 56, 1, 3, 7, 88, 5, 9];

const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1] imp 👇
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return console.log(arr)
}

bubbleSort(arr)

// ---------------------------------------------------------------------------------------

const arr1 = [29, 10, 30, 9, 31, 8, 32, 7,0,1]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = curr

    }
    return console.log(arr);
}

insertionSort(arr1)


