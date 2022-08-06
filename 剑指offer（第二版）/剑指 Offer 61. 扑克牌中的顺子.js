/**
 * fourty four: 剑指 Offer 61. 扑克牌中的顺子
 * 解题思路：
 * 除大小王不能出现重复的牌
 * 判断最大值和最小值的差值不超过五
 * 1. 排序 + 遍历
 * 2. set + 遍历
 */

const map = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13
};

/**
 * 1. 排序 + 遍历
 * @param {number[]} nums
 * @return {boolean}
 */
// var isStraight = function(nums) {
//     nums.sort((a, b) => {
//         a = map[a] || a;
//         b = map[b] || b;
//         return a - b;
//     });
//     let magic = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (!nums[i]) {
//             magic++;
//             continue;
//         }
//         if (i && nums[i - 1]) {
//             const dis = (map[nums[i]] || nums[i]) - (map[nums[i - 1]] || nums[i - 1]);
//             if (!dis || (dis - 1) > magic) return false;
//             magic -= (dis - 1);
//         }
//     }
//     return true;
// };

/**
 * 2. set + 遍历
 * @param {*} nums 
 */
function isStraight (nums) {
    let set = new Set(), max = 0, min = 13;
    for (const num of nums) {
        if (!num) continue;
        if (set.has(num)) return false;
        max = Math.max(map[num] || num, max);
        min = Math.min(map[num] || num, min);
        set.add(num);
    }
    return max - min < 5;
}