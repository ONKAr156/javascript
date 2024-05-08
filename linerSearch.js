
const arr = [1, 2, 3, 4, 3, 4, 5]

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return console.log(i);
            // 👆 Here we need the index of it 
        }
    }
    return -1;
}

linearSearch(arr, 3)

//----------------------------------------------------------------------------------

