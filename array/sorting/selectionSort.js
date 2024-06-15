const arr = [0,5, 4, 3, 2, 1]


const selectionSort = (arr) => {
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j

                console.log(j);
            }
        }

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp

    }
    return console.log(arr);
}

selectionSort(arr)