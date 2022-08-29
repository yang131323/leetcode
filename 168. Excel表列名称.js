/**
 * one hundred and sixty eight: 168. Excel表列名称
 * 解题思路：
 * 1. 模拟，整除取余
 */
const toChar = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];

/**
 * 1. 模拟，整除取余，进制转换
 * @param {number} columnNumber
 * @return {string}
 */
// var convertToTitle = function(columnNumber) {
//     let str = '';
//     while (columnNumber) {
//         const temp = columnNumber % 26;
//         str = toChar[temp] + str;
//         columnNumber = Math.floor(columnNumber / 26);
//         if (temp == 0) columnNumber -= 1;
//     } 
//     return str;
// };

const toC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function convertToTitle (columnNumber) {
    let str = '';
    while (columnNumber) {
        columnNumber--;
        const mod = columnNumber % 26;
        str = toC[mod] + str;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return str;
}