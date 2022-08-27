/**
 * five： 5. 最长回文子串
 * 解题思路：
 * 1. 暴力求解：验证每个子串是否是回文串
 * 2. 中间扩散：以每个字符为中心，向两边扩散（区分奇偶）
 * 3. 动态规划：用d[i][j] 表示字符串 s[i] -> s[j], i <= j
 *  - d[i][j] = d[i + 1][j - 1] && s[i] == s[j] , i <= j, 当回文串长度 < 2 时构成不了区间（一个字符 | 或者边界错位比如说j：3， i：2前一个区间就是[3, 2]），j - i
 *  - s.length < 2; return s
 */

/**
 * 1. 暴力求解 - 官方称为中间扩散法
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let left = 0, right = 0, str = '', result = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == s[i + 1]) {
//             left = i;
//             right = i + 1;
//             str = '';
//             while(s[left] && s[right] && s[left] == s[right]) {
//                 str += s[right];
//                 str = s[left] + str;
//                 left--;
//                 right++;
//             }
//         }
//         result = str.length > result.length ? str : result;
//         if (i > 0 && s[i - 1] == s[i + 1]) {
//             str = s[i];
//             left = i - 1;
//             right = i + 1;
//             while (s[left] && s[right] && s[left] == s[right]) {
//                 str += s[right];
//                 str = s[left] + str;
//                 left--;
//                 right++;
//             }
//         }
//         str = str.length ? str : s[i];

//         result = str.length > result.length ? str : result;
//         str = '';
//     }
//     return result;
// };

/**
 * 3. 动态规划
 * 有个小技巧：应该限制右边界，依次从零枚举左边界，这样才能保证后面要用到的范围都已经判断过
 * js使用动态规范的效率比中心扩散算法差太多，怀疑时js数组读写效率比数字慢太多
 * @param {string} s
 * @return {string}
 */
function longestPalindrome (s) {
    const len = s.length;
    const arr = [];
    arr.length = len;
    for (let i = 0; i < len; i++) {
        arr[i] = [];
    }
    let begin = 0;
    let maxLen = 0;
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] != s[j]) {
                arr[i][j] = false;
            } else if (j - i < 3) { // j - i - (i + 1) + 1
                arr[i][j] = true;
            } else {
                arr[i][j] = !!arr[i + 1][j - 1];
            }
            const strLen = j - i + 1;
            if (arr[i][j] && strLen > maxLen) {
                begin = i;
                maxLen = strLen;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
}
