/**
 * fifty eight: 剑指 Offer 58 - I. 翻转单词顺序
 * 解题思路：
 * 1. 数组翻转
 * 2. 字符串遍历翻转
 */

/**
 * 1. 数组翻转
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     return s.split(' ').filter(val => !!val).reverse().join(' ');
// };

/**
 * 2. 字符串遍历翻转
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    let str = '', word = '';
    for (const char of s) {
        if (char == ' ' && word) {
            str = word + (str ? ' ' + str : str);
            word = '';
            continue;
        } else if (char != ' ') {
            word += char;
        }
    }
    if (word) str = word + (str ? ' ' + str : str);
    return str;
}