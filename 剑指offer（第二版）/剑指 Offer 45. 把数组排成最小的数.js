/**
 * fourty five: 剑指 Offer 45. 把数组排成最小的数
 * 解题思路：
 * 1. 对数组按照字符排序，最后拼接
 */

/**
 * 1. 对数组按照字符排序，最后拼接
 * 边界情况：排序完第一个数字如果是0则需要和后面的第一个非0的交换 - 题目没卡这个点
 * @param {number[]} nums
 * @return {string}
 */
// var minNumber = function(nums) {
//     nums.sort((a, b) => {
//         a = `${a}`;
//         b = `${b}`;
//         if (a + b > b + a) {
//             return 1
//         } else if (a + b < b + a) {
//             return -1;
//         }
//         return 0;
//     });
//     // 处理第一个数为0的情况
//     // if (nums[0] == 0) {
//     //     for (let i = 1; i < nums.length; i++) {
//     //         if (nums[i] != 0) {
//     //             nums[0] = [i];
//     //             nums[i] = 0;
//     //             break;
//     //         }
//     //     }
//     // }
//     return nums.join('');
// };

function swap (arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/**
 * 手写快排
 * @param {number[]} nums
 * @return {string}
 */
function minNumber (nums) {
    function quickSort (arr, l, r) {
        if (l >= r) return arr;
        const t = l + Math.floor(Math.random() * (r - l + 1));
        let left = l + 1, right = r;
        let temp = '' + arr[t];
        swap(arr, l, t);
        while (left <= right) {
            while (left <= right && ((nums[left] + temp) < (temp + nums[left]))) left++;
            while (left <= right && ((nums[right] + temp) > (temp + nums[right]))) right--;
            if (left >= right) break;
            swap(nums, left, right);
            left++;
            right--;
        }
        swap(arr, l, right);
        right > l && quickSort(nums, l, right - 1);
        right < r && quickSort(nums, left, r);
    }
    quickSort(nums, 0, nums.length - 1);
    return nums.join('');
}