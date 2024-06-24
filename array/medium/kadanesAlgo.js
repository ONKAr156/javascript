const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


const kadanesAlgorithm = (arr) => {
    if (arr.length === 0) {
        return 0
    }

    let maxSum = 0
    let currSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (currSum + arr[i] > arr[i]) {
            currSum = currSum + arr[i]
        } else {
            currSum = arr[i]
        }

        if (currSum > maxSum) {
            maxSum = currSum
        }
    }

    return maxSum

}

console.log(kadanesAlgorithm(arr))

