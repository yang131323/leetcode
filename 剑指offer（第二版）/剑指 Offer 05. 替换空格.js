/**
 * five: 剑指 Offer 05. 替换空格
 * 解题思路：
 * 1. 使用replace+正则表达式
 * 2. 遍历 + 替换，需要使用一个n长度空间
 * 3. 使用split和join
 */

/**
 * 1. 使用replace+正则表达式
 * @param {string} s
 * @return {string}
 */
// var replaceSpace = function(s) {
//     return s.replace(/\s/g, '%20');
// };

/**
 * 2. 遍历 + 替换
 * @param {string} s
 * @return {string}
 */
// function replaceSpace (s) {
//     let result = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             result += '%20';
//         } else {
//             result += s[i];
//         }
//     }
//     return result;
// }

/**
 * 3. 使用split和join
 * @param {string} s
 * @return {string}
 */
function replaceSpace (s) {
    let arr = s.split(' ');
    return arr.join('%20');
}