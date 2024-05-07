const arr = [1000, 2500, 22, 20, 16555, 45, 30, 1500, 1]

// Find the largest Number  form the array
const findLargest = (arr) => {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        } else {
            largest[0]
        }
    }
    return console.log(largest);
}

findLargest(arr)

// Find the largest Number  form the array
const smallestNum = (arr) => {
    let smallest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        } else {
            smallest[0]
        }

    }
    return console.log(smallest);
}

smallestNum(arr)