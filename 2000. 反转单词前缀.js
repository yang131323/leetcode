/**
 * one thousand 2000. 反转单词前缀
 * 解题思路：
 * 1. 模拟
 * 2. 模拟 - 双指针（字符串是不可变的）
 */

/**
 * 1. 模拟
 * 详情：
 * 1. 找到索引
 * 2. 进行拼接
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const idx = word.indexOf(ch);
    if (idx < 0) return word;
    let res = word.substring(idx + 1, word.length);
    for (let i = 0; i <= idx; i++) {
        res = word[i] + res;
    }
    return res;
};