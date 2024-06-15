//#1 Print 1-10 using recurrsion
// const handelPrint = (arg) => {
//     if (arg > 10) {
//         return arg;
//     }
//     console.log(arg)
//     arg++;
//     return handelPrint(arg);
// }

// const xc = handelPrint(1);
// console.log(xc);

//#2 Print 10-1 using recurrsion
// const handelPrint = (arg) => {
//     if (arg < 1) {
//         return arg;
//     }
//     console.log(arg)
//     arg--;
//     return handelPrint(arg);
// }

// const xc = handelPrint(10);
// console.log(xc)

//#3 Print even Number
// const handelPrint = (arg) => {
//     if (arg > 10) {
//         return arg
//     }
//     if (arg % 2 === 0) {
//         console.log(arg);
//     }
//     arg++
//     return handelPrint(arg)
// }

// const xc = handelPrint(1);
// console.log(xc)

// #4 Print the sum of Numbers

const handelPrint = (arg) => {
    let temp = 0
    if (arg > 1) {
        return arg
    }
    temp = temp + arg
    arg++
    console.log(temp);
    return temp + handelPrint(arg)


}

const xc = handelPrint(1)
console.log(xc);
