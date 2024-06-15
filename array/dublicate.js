// Simple approach

const arr = [1, 2, 3, 4, 3, 4, 5]
const xc = []

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < i; j++) {
        if (arr[i] === arr[j]) {
            xc.push(arr[i])
        }
    }
}

console.log(xc)

//------------------------------------------------------------------------------
