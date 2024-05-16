const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }

    }
    return console.log(arr);


}
bubbleSort([5, 4, 7, 1, 2, 9])