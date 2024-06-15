// # print reverse number from 10
// const test = (n) => {
//     if (n < 1) {
//         return
//     }

//     console.log(n);
//     test(n - 1)
// }

// test(10)
// 0+1 
//1,2,3,5,8,13,21


// # Print the Fibonacci series till 10
// let fibo = [0, 1]
// for (let i = 2; i < 10; i++) {
//     fibo.push(fibo[i - 1] + fibo[i - 2])
// }
// console.log(fibo)

//# IMP CHECK USING DEBBUGER
// const sum = (arg) => {
//     if (arg === 0) {
//         return 0
//     }
//     return arg + sum(arg - 1)
//           arg 👆 + function 👆      send kre idhar

// }

// const result = sum(5)
// console.log(result);


//# Reverse the string
// const str = "HELLO";
// console.log(str.substring(1));
// const revStr = (arg) => {
//     if (arg.length === 0) {
//         return arg;
//     }
//     return revStr(arg.substring(1)) + arg.charAt(0);
//     //        function 👆          + char 👆      send kre idhar
//     /*
//     hello
//      ello +  h
//      llo +  e
//      lo + l
//      o + l
//     ""+ o
//      last  olleh

//     */
// }

// console.log(revStr(str));


// print number 

// const findNumber = (a, b) => {
//     let num =1
//     for (let i = 1; i <= b; i++) {
//         num *= a
//     }
//     return num

// }

// const result = findNumber(5, 3)
// console.log(result);

//using recurssion

const findNumber = (a, b) => {
    if (b === 1) {
        return 1
    }
    return a * findNumber(a, b - 1)

}

const result = findNumber(5, 3)
console.log(result);

