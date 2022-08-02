/**
 * nine hundred and twelve：排序数组
 * 暴力：直接使用语言自带的排序算法
 * 1. 冒泡排序 - end
 * 2. 快排 - end
 *  - 基础版
 *  - 随机版
 *  - 双路快排
 *  - 三路快排
 * 3. 桶排序
 * 4. 堆排序
 *  - 大根堆
 *  - 小根堆
 * 5. 归并排序
 * 6. 插入排序
 * 7. 希尔排序
 * 8. 选择排序
 */

function swap (arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

/**
 * 1. 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function(nums) {
//     const len = nums.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (nums[j] < nums[i]) {
//                 swap(nums, j, i);
//             }
//         }
//     }
//     return nums;
// };

// function partition (nums, left, right) {
//     if (left >= right) return nums;
//     let p = left;
//     for (let i = left + 1; i <= right; i++) {
//         if (nums[i] < nums[left]) {
//             swap(nums, ++p, i);
//         }
//     }
//     swap(nums, left, p);
//     if (p > left) partition(nums, left, p - 1);
//     if (p < right) partition(nums, p + 1, right);
// }

/**
 * 2. 快排 - 基础版
 * @param {number[]} nums
 * @return {number[]}
 */
// function sortArray (nums) {
//     // let left = 0; right = nums.length, pIdx = 0;
//     partition(nums, 0, nums.length - 1);
//     return nums;
// }

// function quickSort (arr, left, right) {
//     if (left >= right) return arr;
//     const t = left + Math.floor(Math.random() * (right - left + 1));
//     let p = left;
//     swap(arr, left, t);
//     for (let i = left + 1; i <= right; i++) {
//         arr[i] < arr[left] && swap(arr, ++p, i);
//     }
//     swap(arr, left, p);
//     p > left && quickSort(arr, left, p - 1);
//     right > p && quickSort(arr, p + 1, right);
// }

/**
 * 2. 快排 - 随机数版
 * @param {number[]} nums
 * @return {number[]}
 */
// function sortArray (nums) {
//     quickSort(nums, 0, nums.length - 1);
//     return nums;
// }

// function quickSort (arr, left, right) {
//     if (left >= right) return arr;
//     const t = left + Math.floor(Math.random() * (right - left + 1));
//     let p1 = left + 1, p2 = right;
//     swap(arr, t, left);
//     while (p1 <= p2) {
//         while (p1 <= p2 && arr[p1] < arr[left]) { p1++; }
//         while (p1 <= p2 && arr[p2] > arr[left]) { p2--; }
//         if (p1 >= p2) break;
//         swap(arr, p2, p1);
//         p2--;
//         p1++; 
//     }
//     swap(arr, left, p2);
//     p2 > left && quickSort(arr, left, p2 - 1);
//     right > p2 && quickSort(arr, p2 + 1, right);
// }

/**
 * 2. 快排 - 双路快排
 * 将目标元素后面的元素分为两部分：将等于目标评分到前后两部分
 * @param {number[]} nums
 * @return {number[]}
 */
// function sortArray (nums) {
//     quickSort(nums, 0, nums.length - 1);
//     return nums;
// }

function quickSort (arr, left, right) {
    if (left >= right) return arr;
    const t = left + Math.floor(Math.random() * (right - left + 1));
    swap(arr, t, left);
    let pl = left, pr = right;
    for (let i = left + 1; i <= pr; i++) {
        if (pr <= pl) break;
        if (arr[i] < arr[left]) {
            swap(arr, ++pl, i);
        } else if (arr[i] > arr[left]) {
            swap(arr, pr--, i--);
        }
    }
    swap(arr, pl, left);
    if (pl > left) quickSort(arr, left, pl - 1);
    if (right > pr) quickSort(arr, pr + 1, right); 
}


/**
 * 2. 快排 - 三路快排
 * 将目标元素后面的内容分为三部分
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}