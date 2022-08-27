/**
 * fifty-six: 56. 合并区间
 * 解题思路
 * 1. 暴力求解
 */

/**
 * 暴力
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const resIdx = result.length - 1;
        const aLessB = result[resIdx][0] <= intervals[i][0] && result[resIdx][1] >= intervals[i][0] && (result[resIdx][1] <= intervals[i][1] || intervals[i][1] <= result[resIdx][1]);
        // const bLessA = intervals[i][0] <= result[resIdx][0] && (interval[i][1] <= result[resIdx][1] || result[resIdx][1] <= intervals[i][1]);
        if (aLessB) {
            const interval = result.pop();
            result.push([Math.min(interval[0], intervals[i][0]), Math.max(interval[1], intervals[i][1])]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};