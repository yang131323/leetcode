/**
 * thirteen：罗马数字转整数
 * 1. 暴力：遍历，遇到I、x、c就存到零时数据中，遇到对应的数据就减，否则就直接加上
 * 2. 暴力优化版
 * 罗马数字的规律
 * 右边的数一定大于左边的数，只有以下几种情况才会出现小于的数在前面
 * I在V，X左边
 * X在L，C左边
 * C在D，M左边
 */

const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
// const compose = new Map([['I', 'VX'], ['X', 'LC'], ['C', 'DM']]);
/**
 * 暴力优化版
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function(s) {
//     let result = 0, temp = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (!temp && compose.has(s[i]) || temp && s[i] == s[i - 1]) {
//             temp += map[s[i]];
//             continue;
//         }
//         if (temp && compose.has(s[i]) && !compose.get(s[i - 1]).includes(s[i])) {
//             result += temp;
//             temp = map[s[i]];
//             continue;
//         }
//         if (i && compose.has(s[i - 1])) {
//             const com = compose.get(s[i - 1]);
//             result += com.includes(s[i]) ? map[s[i]] - temp : map[s[i]] + temp;
//         } else {
//             result += map[s[i]];
//         }
//         temp = 0;
//     }
//     temp && (result += temp);
//     return result;
// };

/**
 * 暴力优化版
 * @param {string} s
 * @return {number}
 */
function romanToInt (s) {
    let result = 0, preSum = map[s[0]];
    for (let i = 1; i < s.length; i++) {
        const num = map[s[i]];
        if (preSum < num) {
            result -= preSum;
        } else {
            result += preSum;
        }
        preSum = num;
    }
    preSum && (result += preSum);
    return result;
}