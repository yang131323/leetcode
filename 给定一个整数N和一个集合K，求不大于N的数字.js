/**
 * 题目
 * 给一个正整数N和一个集合K，K里面的元素由数字0-9任意个随机组成
 * 个数不限，比如[0, 2, 3] / [3, 4, 5, 6]
 * 用数组里的数字拼接一个小于n的最大数，数组里的数字可以重复取
 * 解题思路：排序、回溯
 */

function minNNum (arr, n) {
    let res = 0, nums = [], ns = [], map = {};
    let temp = n;
    arr.sort((a, b) => b - a);
    while (temp) {
        ns.unshift(temp % 10);
        temp = Math.floor(temp / 10);
    }
    let p1 = 0;
    while (nums.length < ns.length) {
        while (arr[p1] > nums && !map[p1]) p1++;
        if (p1 >= arr.length) {
            const idx = nums.pop();
            if (nums.length <= 0) break;
            let next = idx + 1;
            while (!map[next]) next++;
            nums.push(next);
            map[idx] = false;
            map[next] = true;
            continue;
        }
        nums.push(p1);
        map[p1] = true;
        p1 = 0;
    }
    if (!nums.length) nums = arr.slice(0, ns.length - 1);
    while (nums) {
        res = res * 10 + arr[nums.pop()];
    }
    return res;
}