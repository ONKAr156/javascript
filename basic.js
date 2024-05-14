/*
push,pop, shift, unshift = O(1)
splice = O(n)
*/

// const handelTable = (num) => {
//     const arr=[]
//     for (let i = 1; i <= 10; i++) {
//         arr.push(i * num)

//     }
//     console.log(arr);

// }

// handelTable(3)

// const num1 = 2
// const num2 = 5


// const handelPrint = (a, b) => {
//     let arr = []
//     for (let i = a; i <= b; i++) {
//         for (let j = 1; j <= 10; j++) {
//             arr.push( j * i)
//         }
//     }
//     console.log(arr);


// }

// handelPrint(num1, num2)


// const pattern = (n) => {
//     let str = ""
//     for (let i = n; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//             str += "*"

//         }
//         str += "\n"

//     }
//     return str

// }

// const xc = pattern(5)
// console.log(xc);


const triangle = (num) => {
    let str = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= num; j++) {
            if (j == num || j >= num - i) {
                str += "* ";
            }
            else {
                str += "- "
            }
        }
        str += "\n";
    }
    return str
}
let str = triangle(5)
// console.log(str);