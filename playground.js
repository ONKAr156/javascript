const arr = [7, 2, 4, 6, 5, 1, 3]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j+1]) {
                console.log(arr[i]);
                console.log(arr[j]);
                arr[j] = arr[i]
            }
        }

    }
    return console.log(arr);


}


insertionSort(arr)