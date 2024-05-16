
// #1 -------------------------------------------------------------------------
// const pattern = (n) => {
//     let str = "";
//     for (let i = 1; i < n; i++) {
//         for (let j = 1; j < i + 1; j++) {
//             str += i

//         }
//         str += "\n";
//     }
//     return str;
// };

// const xc = pattern(10);
// console.log(xc);



//#2 ⚡⚡ --------------------------------------------------------------------
// const pattern = (n) => {
//     let str = "", count = 1
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i ; j++) {
//             str += count++ +" "

//         }
//         str += "\n";
//     }
//     return str;
// };

// const xc = pattern(5);
// console.log(xc);


//#3 Descending triangle ---------------------------------------------------

// const pattern = (n) => {
//     let str = ""
//     for (let i = n; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             str += "* "
//         }
//         str += "\n"
//     }
//     return str
// }
// const xc = pattern(5)
// console.log(xc);

// #4 ----------------------------------------------------------------------
// const pattern = (n) => {
//     let str = ""
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n - 1; j++) {
//             str += "_ "
//         }
//         for (let k = 1; k <= i; k++) {
//             str += "* "

//         }
//         str += "\n"
//     }
//     return str

// }
// const xc = pattern(5)
// console.log(xc);

// #5 ⚡⚡ ---------------------------------------------------------------------
// let str = ""
// for (let i = 0; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         str += "* "
//     }
//     if (i != 5) {
//         str += "\n"
//     }
// }
// for (let i = 2; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += "* "
//     }
//     str += "\n"

// }
// console.log(str);

const arr = [5, 4, 7, 1, 2, 9]
let num = arr[2]
arr[2] = arr[3]
arr[3] = num
console.log(arr);



let x = 10, y = 20

let z = y
y = x
x = z

console.log(x, y);

// #6 star pyramid up 
// const pattern = (n) => {
//     let str = ""
//     for (let i = 1; i <= n; i++) {
//         for (let j = n; j > i - 1; j--) {
//             str += "  "
//         }

//         for (let k = 1; k <= i; k++) {
//             str += "* "

//         }
//          for (let l = 2; l <= i; l++) {
//             str += "* "

//         }
//         str += "\n"

//     }
//     return console.log(str);

// }

// pattern(5)

// #7 star pyramid down 
const pattern = (n) => {
    let str = ""
    for (let i = n; i > 0; i--) {
         for (let k = 0; k < n - i; k++) {
            str += "  "

        }
      
        
        for (let j = 0; j < i; j++) {
            str += "* "

        }
        for (let l = 1; l < i; l++) {
            str += "* "

        }
        

        str += "\n"

    }
    return console.log(str);

}

pattern(5)