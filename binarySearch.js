const arr = [5, 6, 7, 8, 9, 28, 29, 30, 31, 32];

const binarySearch = (arr, num) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);

        if (arr[midIndex] === num) {
            return midIndex; // Number found, return its index
        } else if (arr[midIndex] < num) {
            min = midIndex + 1; // Search the right half
        } else {
            max = midIndex - 1; // Search the left half
        }
    }

    return -1; // Number not found in the array
}

const result = binarySearch(arr, 28);
console.log(result); 
