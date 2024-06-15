const arr = [5, 1, 1, 2, 2, 5, 8, 7, 8, 7];
// # 1 Remove duplicate values from array

// console.log(arr.filter((item, i, arr) => {
//     return arr.indexOf(item) === i
// }));

// console.log([...new Set(arr)])


// const removeRepValues = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false
//         for (let j = 0; j < newArr.length; j++) {
//             if (arr[i] === newArr[j]) {
//                 isDuplicate = true;
//                 break;
//             }

//         }
//         if (!isDuplicate) {
//             newArr.push(arr[i])
//         }

//     }
//     return console.log(newArr);

// }

// removeRepValues(arr)
//--------------------------------------------------------------------


// #2 Sorting
// console.log(arr.sort((a,b)=>a-b))
// console.log(arr.sort((a,b)=>b-a))


// const sortTheArray = (arr) => {
//     // Bubble sort
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return console.log(arr);
// }

// sortTheArray(arr)

// --------------------------------------------------------------------

// #3 Find the maximun value
// console.log(arr.reduce((a, b) => a > b ? a : b))

// const findTheLargestValue = (arr) => {
//     let largest = arr[0]
//     let second = 0
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             second = largest
//             largest = arr[i]
//         } else if (arr[i] > second && arr[i] !== largest) {
//             second = arr[i];
//         }

//     }
//     return console.log(largest, second);
// }
// findTheLargestValue(arr)

// #4 Rotate an array from left

// const rotateArray = (arr) => {

//     let save = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = save

//     return console.log(arr);
// }

// rotateArray(arr)

// #5 intersection
// const arr1 = [1, 2, 3]
// const arr2 = [2, 3, 4]

// const checkCommon = (a, b) => {
//     let nw = []
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] == b[j]) {
//                 nw.push(b[j])
//             }

//         }

//     }
//     return console.log(nw);
// }

// checkCommon(arr1, arr2)
// ------------------------------------------------------------------------

// #6  reverse a string

// const str = "HELLO" // OLLEH

// const reverseString = (str) => {
//     let temp = ''
//     for (let i = str.length-1; i >= 0; i--) {

//         temp += str[i]
//     }
//     return console.log(temp);
// }
// reverseString(str)
// ------------------------------------------------------------------------

// #7 check Palindrome  MOON = MOON, RACECAR =RACECAR ETC
// const str = "ONKAR"

// const checkPalindrome = (str) => {
//     // Phele reverse phir original se compare
//     let temp = ''
//     for (let i = str.length - 1; i >= 0; i--) {

//         temp += str[i]
//     }
//     if (temp === str) {
//         return console.log(true);
//     } else {
//         console.log(false);
//     }
//     return console.log(temp);
// }
// checkPalindrome(str)
// ------------------------------------------------------------------------

// #8 Check Vowels
// const str = "onkar"
// const checkVowels = (str) => {
//     const data = ["a", "e", "i", "o", "u"]
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < data.length; j++) {
//             if (data[j] == str[i]) {
//                 count = count + 1
//             }
//         }
//     }

//     return console.log(count);
// }

// checkVowels(str)
// ------------------------------------------------------------------------

// #9 Remove dublicate values from string

// const str = "hello"
// const removeRepValues = (str) => {
//     let temp = ''

//     for (let i = 0; i < str.length; i++) {
//         let duplicate = false
//         for (let j = 0; j < temp.length; j++) {
//             if (str[i] === temp[j]) {
//                 duplicate = true
//                 break;
//             }
//         }
//         if (!duplicate) {
//             temp = temp + str[i]
//         }
//     }


//     console.log(temp)

// }
// removeRepValues(str)

//#10 Anagram
const str1 = "onkar"
const str2 = "ranko"


// const a = str1.split('').sort().join("")
// const b = str2.split('').sort().join("")
// console.log(a === b)

const checkAnagram = (str1, str2) => {
    // Check if the strings have the same length. If not, they cannot be anagrams.
    if (str1.length !== str2.length) {
        console.log(false);
        return;
    }

    // Create two objects to count the frequency of each character in both strings.
    const charCount1 = {};
    const charCount2 = {};

    // Count the frequency of each character in str1.
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        if (charCount1[char]) {
            charCount1[char]++;
        } else {
            charCount1[char] = 1;
        }
    }

    // Count the frequency of each character in str2.
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if (charCount2[char]) {
            charCount2[char]++;
        } else {
            charCount2[char] = 1;
        }
    }

    // Compare the frequency counts of both strings.
    for (const char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            console.log(false);
            return;
        }
    }

    console.log(true);
};

checkAnagram(str1, str2);
