/** 
 * one thousand one hundred and sixty: 拼写单词
 * 解题思路：
 * 1. 建立字母表map，并记录出现次数，时间复杂度O(l ^ 2)
 */

/**
 * 1. 建立字母表map，并记录出现次数，时间复杂度O(l ^ 2) 使用indexOf版本会快一点
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0, map = {};
    for (let i = 0; i < chars.length; i++) {
        if (!map[chars[i]]) {
            map[chars[i]] = 1;
            continue;
        }
        map[chars[i]]++;
    }
    for (const word of words) {
        const temp = { ...map };
        let i = 0;
        for (; i < word.length; i++) {
            const char = word[i];
            if (!temp[char]) break;
            temp[char]--;
        }
        if (i === word.length) result += i;
    }
    return result;
};