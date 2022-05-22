/**
 * seventeen: 电话号码的字母组合
 * 解题思路：
 * 1. 暴力求解，两两求解
 */

const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

/**
 * 暴力：两两组合
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//     if (!digits.length) return [];
//     let result = map[digits[0]];
//     for (let i = 1; i < digits.length; i++) {
//         const second = map[digits[i]];
//         const temp = [];
//         for (const f of result) {
//             for (const s of second) {
//                 temp.push(f + s);
//             }
//         }
//         result = temp;
//     }
//     return result;
// };

/**
 * 回溯法
 * @param {*} digits 
 * @param {*} combination 
 * @param {*} result 
 * @returns 
 */
function letterCombinations (digits, combination = '', result = []) {
    if (!digits.length) return result;
    const curStr = map[digits[0]];
    for (const s of curStr) {
        const str = combination + s;
        if (digits.length > 1) {
            letterCombinations(digits.substr(1, digits.length), str, result);
            continue;
        }
        result.push(str)
    }
    return result;
}