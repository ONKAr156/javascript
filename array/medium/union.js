// The values should not be repated and union note this already sorted arrays provided

const arr1 = [1, 1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 4, 5, 6];

const unionOf2Arrays = (arr1, arr2) => {
    let mergedArray = [];
    let uniqueArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }

    // Remove duplicates
    for (let i = 0; i < mergedArray.length; i++) {
        let element = mergedArray[i];
        let isUnique = true;
        // Check if element is already in uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (uniqueArray[j] === element) {
                isUnique = false;
                break;
            }
        }
        // If the element is unique, add it to uniqueArray
        if (isUnique) {
            uniqueArray.push(element);
        }
    }

    console.log(uniqueArray);
};

unionOf2Arrays(arr1, arr2);
