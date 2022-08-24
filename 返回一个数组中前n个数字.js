/**
 * 题目：一个整数数组：[98, 99, 34, 34, 1, -1, 4, 0, 2, 3, 9]，返回前k个小的数字，需要按照原数组的顺序返回，如返回前4个小的数字，[1, -1, 0, 2]
 */

let arr = [98, 99, 34, 34, 1, -1, 4, 0, 2, 3, 9];
function fontNNum(nums, k) {
    const newArr = [], res = [];
    for (let i = 0; i < nums.length; i++) {
        newArr[i] = i;
    }
    newArr.sort((a, b) => nums[a] - nums[b]);
    let set = new Set(newArr.slice(0, k)), p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (set.has(i)) {
            res[p++] = nums[i];
            if (p === k) break;
        }
    }
    return res;
}

fontNNum(arr, 4);
