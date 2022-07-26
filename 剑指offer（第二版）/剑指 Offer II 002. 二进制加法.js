/**
 * two：剑指 Offer II 002. 二进制加法
 * 解题思路
 * 1. 模拟
 * 2. 双指针
 */

/**
 * 1. 模拟
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     a = a.split('').reverse().join(''), b = b.split('').reverse().join('');
//     const aLen = a.length, bLen = b.length, len = Math.max(aLen, bLen);
//     let res = '', mod = 0;
//     for (let i = 0; i < len; i++) {
//         if (!a[i] && !mod) {
//             res += b.slice(i);
//             break;
//         }
//         if (!b[i] && !mod) {
//             res += a.slice(i);
//             break;
//         }
//         const val = parseInt(a[i] || 0) + parseInt(b[i] || 0) + mod;
//         res += val % 2;
//         mod = val >> 1;
//     }
//     if (mod > 0) res += mod;
//     return res.split('').reverse().join('');
// };

/**
 * 1. 双指针
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary (a, b) {
    let aLen = a.length - 1, bLen = b.length - 1, mod = 0;
    const res = [];
    while (aLen >= 0 || bLen >= 0 || mod) {
        const val = parseInt(a[aLen] || 0) + parseInt(b[bLen] || 0) + mod;
        res.unshift(val % 2);
        mod = val >> 1;
        aLen--;
        bLen--;
    }
    return res.join('');
}