/* 1.

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/
// const pattern = (n) => {
//     let str = ""
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             str += "* "

//         }
//         str += "\n"
//     }
//     return str
// }

// const xc = pattern(5)
// console.log(xc);

/* 2.

*
**
***
****
*****

*/

// const pattern = (n) => {
//     let str = ""
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i + 1; j++) {
//             str += "*"
//         }
//         str += "\n"
//     }
//     return str
// }

// const xc = pattern(5)
// console.log(xc);


// Similar just number


// const pattern = (n) => {
//     let str = ""
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j < i + 1; j++) {
//             str += j
//         }
//         str += "\n"
//     }
//     return str
// }

// const xc = pattern(5)
// console.log(xc);

// #3
const pattern = (n) => {
    let str = ""
    for (let i = n; i >=0; i--) {
        for (let j = 0; j < i; j++) {
            str += "*"
        }
        str += "\n"
    }
    return str
}

const xc = pattern(5)
console.log(xc);