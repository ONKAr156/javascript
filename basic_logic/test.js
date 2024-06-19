const arr = [92, 8, 4, 54, 7, 6, 42, 0, 12, 1, 7, 9, 3, 2]

// console.log(arr.sort((a,b)=>a-b));
// const sort = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     console.log(arr);

// }

// sort(arr)


// const largest = (arr) => {
//     let largest = arr[0]
//     let second = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         if (largest < arr[i + 1]) {
//             second = largest
//             largest = arr[i]
//         } else if (arr[i] > second && arr[i] !== largest) {
//             second = arr[i];
//         }
//     }
//     console.log(largest, second);
// }

// largest(arr)



// const findPrimes = (n) => {
//     let primes = [];
//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(i);
//         }
//     }
//     return primes;
// }

// let n = 50;
// console.log(findPrimes(n)); 



