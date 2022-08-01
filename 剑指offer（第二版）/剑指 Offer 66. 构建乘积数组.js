/**
 * sixty six: 剑指 Offer 66. 构建乘积数组
 * 解题思路：
 * 1. 按照当前元素求前后两个乘积的数组
 */

/**
 * 1. 按照当前元素求前后两个乘积的数组
 * @param {number[]} a
 * @return {number[]}
 */
// var constructArr = function(a) {
//     let res = [], len = a.length, fArr = [a[0]], eArr = [];
//     eArr[len - 1] = a[len - 1];
//     for (let i = 1; i < len; i++) {
//         fArr[i] = fArr[i - 1] * a[i];
//     }

//     for (let i = len - 2; i >= 0; i--) {
//         eArr[i] = eArr[i + 1] * a[i];
//     }

//     for (let i = 0; i < len; i++) {
//         if (i == 0) {
//             res[i] = eArr[i + 1] || 0;
//         } else if (i == len - 1) {
//             res[i] = fArr[i - 1] || 0;
//         } else {
//             res[i] = fArr[i - 1] * eArr[i + 1];
//         }
//     }
//     return res;
// };

/**
 * 优化版
 * @param {*} arr 
 * @returns 
 */
function constructArr (arr) {
    const res = [], len = arr.length, lArr = [], rArr = [];
    rArr[len - 1] = 1;
    for (let i = len - 2; i >= 0; i--) {
        rArr[i] = rArr[i + 1] * arr[i + 1];
    }

    let l = 1;
    for (let i = 0; i < len; i++) {
        res[i] = l * rArr[i];
        l *= arr[i];
    }

    return res;
}