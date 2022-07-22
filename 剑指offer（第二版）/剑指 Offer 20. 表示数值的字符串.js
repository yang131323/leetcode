/**
 * twenty: 剑指 Offer 20. 表示数值的字符串
 * 解题思路：
 * 1. 模拟过程
 */

const charReg = /\+|\-/;
const eReg = /e|E/;

function isNum (s, init = false) {
    if (!s) return false
    let hasPoint = init, hasNum = false, hasChar = false;
    for (let i = 0; i < s.length; i++) {
        if (/\d/.test(s[i])) {
            hasNum = true;
            continue;
        }
        if (charReg.test(s[i]) && i == 0) {
            hasChar = true;
            continue;
        }
        if (charReg.test(s[i]) || (s[i] == '.' && hasPoint)) return false
        if (s[i] == '.' && !hasPoint) {
            hasPoint = true;
            continue;
        }
        return false;
    }
    return hasPoint || hasChar ? hasNum : true;
}

/**
 * 1. 模拟过程
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    let sArr = s.split(eReg);
    if (sArr.length == 1) {
        return isNum(sArr[0])
    } else if (sArr.length == 2) {
        return isNum(sArr[0]) && isNum(sArr[1], true);
    } else {
        return false
    }
};