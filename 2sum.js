// Brut  ------------------------------------------------------
// const nums = [2, 7, 11, 15]
// const target = 9

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         if (nums[i] + nums[j] === target) {
//             return console.log([j, i]);
//         }

//     }

// }
// Brut -------------------------------------------------------

// Using Hash Map ---------------------------------------------

const nums = [2, 7, 11, 15]
const target = 9
const numMap = {};
// This will store the number along with its index


for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (complement in numMap) {
        // Return the current index and the stored index of the complement
        return console.log([numMap[complement], i]);
    }

    // Store the current number along with its index in the map
    numMap[nums[i]] = i;
}

//-------------------------------------------------------------





