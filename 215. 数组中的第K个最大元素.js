/**
 * two hundred and fifteen: 215. 数组中的第K个最大元素
 * 解题思路：
 * 1. 暴力：直接排序，返回低k大的元素 - 应该不符合题意
 * 2. 利用快排规则（每次都能确定一个元素的位置，只要确定第n - k元素的位置就能得到结果）
 * 3. 大根堆
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//     nums = nums.sort((a, b) => b - a);
//     return nums[k - 1];
// };

// function change (nums, first, second) {
//     const temp = nums[first];
//     nums[first] = nums[second];
//     nums[second] = temp;
// }

// function partition (nums, left, right) {
//     const t = left + Math.floor(Math.random() * (right - left + 1));
//     change(nums, t, left);
//     let p1 = left + 1, p2 = right;
//     while (p1 <= p2) {
//         for (; p1 <= p2; p1++) {
//             if (nums[p1] >= nums[left]) break;
//         }
//         for (; p2 >= p1; p2--) {
//             if (nums[p2] <= nums[left]) break;
//         }
//         if (p1 >= p2) break;
//         change(nums, p1, p2);
//         p1++;
//         p2--;
//     }
//     change(nums, left, p2);
//     return p2;
// }

// /**
//  * 快排过程，找到第k个大的就返回
//  * @param {*} nums 
//  * @param {*} k 
//  * @returns 
//  */
// function findKthLargest (nums, k) {
//     const len = nums.length;
//     let left = 0, right = len - 1;
//     k = len - k;
//     while (left <= right) {
//         const pIdx = partition(nums, left, right)
//         if (pIdx == k) {
//             return nums[pIdx];
//         } else if (pIdx < k) {
//             left = pIdx + 1
//         } else if (pIdx > k) {
//             right = pIdx - 1
//         }
//     }
// }

function swap (nums, first, second) {
    const temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp
}

function maxHeap (nums, parent, size) {
    let largest = parent, l = parent * 2 + 1, r = parent * 2 + 2;
    if (l < size && nums[largest] < nums[l]) {
        largest = l;
    }

    if (r < size && nums[largest] < nums[r]) {
        largest = r;
    }

    if (parent != largest) {
        swap(nums, largest, parent);
        maxHeap(nums, largest, size);
    }
}

function buildHeap (nums) {
    const size = nums.length;
    for (let i = Math.floor(size / 2); i >= 0; i--) {
        maxHeap(nums, i, size);
    }
}

function findKthLargest (nums, k) {
    buildHeap(nums);
    while (k > 1) {
        nums.shift();
        k--;
        buildHeap(nums);
    }
    return nums[0];
}
