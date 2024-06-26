## Bubble Sort Algorithm

- **Logic**:
  - It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
  - During each pass through the list, the largest unsorted element "bubbles up" to its correct position at the end of the list.
  - The algorithm consists of two nested loops:
    - The outer loop (`for i = n; i > 0; i--`) controls the number of passes through the list. In each pass, the largest unsorted element is placed in its correct position.
    - The inner loop (`for j = 0; j < i - 1; j++`) iterates through the unsorted portion of the list. For each pair of adjacent elements, if they are in the wrong order (i.e., `arr[j] > arr[j + 1]`), they are swapped.
  - After completing all passes, the array becomes sorted in ascending order.
  - Bubble Sort has a time complexity of O(n^2) & space complexity of O(1)

## Insertion Sort Algorithm

- **Logic**:
  - The for loop iterates over each element of the array starting from the second element (i = 1). The first element (arr[0]) is considered sorted initially.
  - For each element at position i (let curr = arr[i]), the algorithm compares it with the elements before it (from j = i - 1 down to 0).
  - The while loop (while (j >= 0 && arr[j] > curr)) shifts elements larger than curr to the right to make space for curr in the sorted section of the array.
  - Once the correct position for curr is found (j + 1), it is inserted into the array (arr[j + 1] = curr).
  - The time complexity of Insertion Sort is O(n^2) & a space complexity of O(1) 


## Binary Search Algorithm


- **Assumptions**

 - The `binarySearch` function assumes that the input array (`arr`) is sorted in ascending order Only.
 - The `num` parameter provided to `binarySearch` is assumed to be a number that we want to search for within the sorted array (`arr`).

- **Logic**

- **Binary Search Overview**:
  - Binary search is a classic search algorithm that efficiently finds the position of a target value within a sorted array.
  - It works by repeatedly dividing the search interval in half.
  - At each step, it compares the middle element of the current interval with the target value.
  - If the middle element matches the target, the search is successful.
  - If the middle element is less than the target, the search continues in the right half of the current interval.
  - If the middle element is greater than the target, the search continues in the left half of the current interval.