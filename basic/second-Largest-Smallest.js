// Find the 2nd largest number form the array ------------------------------------------

const arr1 = [45, 10, 20, 30, 40, 50];
let largest = arr1[0];
let second_largest;

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        second_largest = largest; // Update second largest  to previous largest
        largest = arr1[i]; // Update largest to current element
    } else if (arr1[i] > second_largest || second_largest === undefined) {
        second_largest = arr1[i]; // Update second largest if current element is greater than the current second largest
    }
}

console.log(second_largest)
// -------------------------------------------------------------------------------------


//Find the smallest 2nd Number form the array ------------------------------------------

const arr2 = [45, 10, 20, 30, 40, 50];
let smallest = arr2[0];
let second;

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        second = smallest; // Update second smallest to previous smallest
        smallest = arr2[i]; // Update smallest to current element
    } else if (arr2[i] < second || second === undefined) {
        second = arr2[i]; // Update second smallest if current element is greater than the current second largest
    }
}

console.log(second)

// -------------------------------------------------------------------------------------