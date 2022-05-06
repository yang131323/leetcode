/**
 * 解题思路
 * 1. 开辟新数组，抽取非零
 * 2. 遇到零记录位置，和第一个非零进行替换
 * 3. 找到0删除，数组后面追加0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// function moveZeroes (nums = []) {
//     let len = nums.length;
//     let isEnd = false;
//     for (let i = 0; i < len - 1; i++) {
//         if (nums[i] != 0) continue;
//         for (let j = i + 1; j < len; j++) {
//             if (nums[j] != 0) {
//                 nums[i] = nums[j];
//                 nums[j] = 0;
//                 break;
//             } 
//             if (j == len - 1) isEnd = true;
//         }
//         if (isEnd) break;
//     }
// }

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes (nums = []) {
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[flag] = nums[i];
            (i != flag) && (nums[i] = 0);
            flag++;
        }
    }
}